import { useState } from "react";
import { search } from "../services/search";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ users: any[]; projects: any[] } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const res = await search(query);
    setResults(res);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 border rounded"
          type="text"
          placeholder="Search users or projects"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </form>

      {results && (
        <div className="space-y-6">
          {/* Only Users */}
          {results.users.length > 0 && results.projects.length === 0 && (
            <div>
              <h2 className="font-bold text-lg">Users</h2>
              <ul className="list-disc pl-5">
                {results.users.map((u) => (
                  <li key={u.id}>
                    <Link to={`/profile/${u.username}`} className="text-blue-600 hover:underline">
                      {u.username}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Only Projects */}
          {results.projects.length > 0 && results.users.length === 0 && (
            <div>
              <h2 className="font-bold text-lg">Projects</h2>
              <ul className="list-disc pl-5">
                {results.projects.map((p) => (
                  <li key={p.id}>
                    <Link to={`/projects/${p.id}`} className="text-blue-600 hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Both Users and Projects */}
          {results.users.length > 0 && results.projects.length > 0 && (
            <>
              <div>
                <h2 className="font-bold text-lg">Users</h2>
                <ul className="list-disc pl-5">
                  {results.users.map((u) => (
                    <li key={u.id}>
                      <Link to={`/profile/${u.username}`} className="text-blue-600 hover:underline">
                        {u.username}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-lg">Projects</h2>
                <ul className="list-disc pl-5">
                  {results.projects.map((p) => (
                    <li key={p.id}>
                      <Link to={`/projects/${p.id}`} className="text-blue-600 hover:underline">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* No results */}
          {results.users.length === 0 && results.projects.length === 0 && (
            <p className="text-sm text-gray-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}
