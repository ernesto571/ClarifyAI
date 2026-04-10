import { sql } from "../config/db.js";

export const getProfile = async (req, res) => {
    try {
      const [user] = await sql`
        SELECT id, email, first_name, last_name, role, created_at, last_login
        FROM users
        WHERE email = ${req.authUser.email}
      `;
  
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
  
      return res.status(200).json({ user });
    } catch (err) {
      console.error("Get profile error:", err);
      return res.status(500).json({ error: "Could not fetch profile." });
    }
};
  
  // ─── PATCH /api/user/profile ──────────────────────────────────────────────────
  export const updateProfile = async (req, res) => {
    try {
      const { first_name, last_name } = req.body;
  
      if (!first_name && !last_name) {
        return res.status(400).json({ error: "Provide at least one field to update." });
      }
  
      const [updated] = await sql`
        UPDATE users
        SET
          first_name = COALESCE(${first_name ?? null}, first_name),
          last_name  = COALESCE(${last_name ?? null}, last_name)
        WHERE email = ${req.authUser.email}
        RETURNING id, email, first_name, last_name, role, created_at, last_login
      `;
  
      return res.status(200).json({ user: updated });
    } catch (err) {
      console.error("Update profile error:", err);
      return res.status(500).json({ error: "Could not update profile." });
    }
  };