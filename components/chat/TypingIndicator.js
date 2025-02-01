export default function TypingIndicator({ users }) {
  if (!users || users.length === 0) return null;

  const formatUsers = () => {
    if (users.length === 1) return users[0];
    if (users.length === 2) return `${users[0]} and ${users[1]}`;
    return `${users[0]} and ${users.length - 1} others`;
  };

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex space-x-1">
        <div
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
      <span>{formatUsers()} typing...</span>
    </div>
  );
}
