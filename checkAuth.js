import jwt from "jsonwebtoken";
const authenticate = (context) => {
  const Authorization = context.event.headers.Authorization;
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId;
  }
  throw new Error("Not authorized");
};

export default authenticate;
