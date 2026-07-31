const Visit = require("../models/Visit");
const { sendVisitNotification } = require("../config/mailer");

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const notifyIfNewVisitor = async ({ ip, path, referrer, userAgent }) => {
  const cutoff = new Date(Date.now() - ONE_DAY_MS);
  const existing = await Visit.findOne({ ip });

  if (existing && existing.lastNotifiedAt > cutoff) {
    return;
  }

  await Visit.updateOne(
    { ip },
    { $set: { lastNotifiedAt: new Date() } },
    { upsert: true }
  );

  await sendVisitNotification({ ip, path, referrer, userAgent });
};

module.exports = notifyIfNewVisitor;
