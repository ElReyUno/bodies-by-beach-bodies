import { searchDatabase } from '../../lib/search';

export default async function handler(req, res) {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    const results = await searchDatabase(q);
    res.status(200).json(results);
}