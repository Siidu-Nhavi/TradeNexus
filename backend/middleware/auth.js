const jwt = require('jsonwebtoken');

const getCookieToken = (req) => {
    const authHeader = req.headers['authorization'];

    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.slice(7);
    }

    const cookieHeader = req.headers.cookie;

    if (!cookieHeader) {
        return null;
    }

    const cookies = cookieHeader.split(';').reduce((accumulator, entry) => {
        const [name, ...valueParts] = entry.trim().split('=');

        if (!name) {
            return accumulator;
        }

        accumulator[name] = decodeURIComponent(valueParts.join('='));
        return accumulator;
    }, {});

    return cookies.authToken || null;
};

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const token = getCookieToken(req);

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
};

module.exports = { authenticateToken };
