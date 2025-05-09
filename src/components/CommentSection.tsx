import { useEffect, useState } from "react";
import { fetchComments, postComment } from "../services/comment";
import { useAuth } from "../contexts/AuthContext";

type Props = {
  projectId: number;
};

type Comment = {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
};

export default function CommentSection({ projectId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const { token } = useAuth();

  useEffect(() => {
    const loadComments = async () => {
      const data = await fetchComments(projectId);
      setComments(data);
    };
    loadComments();
  }, [projectId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const added = await postComment(projectId, newComment, token!);
      setComments([added, ...comments]);
      setNewComment("");
    } catch {
      alert("Error posting comment");
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Feedback</h3>

      {token && (
        <form onSubmit={handleSubmit} className="my-4 space-y-2">
          <textarea
            className="w-full border p-2 rounded"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave your feedback..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}

      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet.</p>
      ) : (
        <ul className="space-y-2">
          {comments.map((c) => (
            <li key={c.id} className="bg-gray-100 p-2 rounded">
              <p className="text-sm">{c.content}</p>
              <p className="text-xs text-gray-500">
  Posted on {new Date(c.created_at).toString() === "Invalid Date" ? "Date unavailable" : new Date(c.created_at).toLocaleString()}
</p>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
