export default function handler(req, res) {
  const testKey = process.env.TEST_KEY;

  if (!testKey) {
    return res.status(500).json({ error: "TEST_KEY not found" });
  }

  return res.status(200).json({ key: testKey });
}
