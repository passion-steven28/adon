import { createClient } from '@sanity/client';

export default createClient({
    projectId: "jackkedu",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});