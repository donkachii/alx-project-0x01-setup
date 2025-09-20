import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: posts.length + 1 });
  };

  console.log(posts);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts.map(
            (
              {
                name,
                username,
                address,
                email,
                id,
                phone,
                website,
                company,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                name={name}
                username={username}
                address={address}
                email={email}
                id={id}
                phone={phone}
                website={website}
                company={company}
                key={key}
              />
            )
          )}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
