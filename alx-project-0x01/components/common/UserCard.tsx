import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, address, email, id, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name} - {username}</h2>
      </div>
      <p className="text-gray-600">{address.city}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
        <span>User Email: {email}</span>
        <span>User Phone: {phone}</span>
        <span>User Website: {website}</span>
        <span>User Company: {company.name}</span>
      </div>
    </div>
  );
};

export default UserCard;