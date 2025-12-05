import { Request, Response, NextFunction } from "express";

export const authorize =
  (...allowedRoles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user || !user.role) {
      return res.status(403).json({ message: "User role missing" });
    }

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
