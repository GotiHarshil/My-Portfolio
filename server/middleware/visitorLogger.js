const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.ip;
};

// The page the visitor is actually on, as reported by the client ping —
// req.path would only ever be the ping endpoint itself.
const getVisitedPath = (req) => req.query.path || req.path;

const getReferrer = (req) => req.query.referrer || req.headers.referer || "-";

const logVisitor = (req, res, next) => {
  console.log(
    `[visit] ${new Date().toISOString()} ip=${getClientIp(req)} path=${getVisitedPath(
      req
    )} referrer=${getReferrer(req)} ua="${req.headers["user-agent"] || "-"}"`
  );
  next();
};

module.exports = logVisitor;
module.exports.getClientIp = getClientIp;
module.exports.getVisitedPath = getVisitedPath;
module.exports.getReferrer = getReferrer;
