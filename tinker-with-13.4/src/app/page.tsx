import { prisma } from "@/db";
import Link from "next/link";
import TodoItem from "@/components/TodoItem";

const getTodos = () => {
  return prisma.todo.findMany();
};

const toggleTodo = async (id: string, complete: boolean) => {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
};

async function Home() {
  const todos = await getTodos();
  // await prisma.todo.create({ data: { title: "test1", complete: false } });

  const renderList = todos.map(todo => (
    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
  ));

  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className=" border border-slate-300 test-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">{renderList}</ul>
    </>
  );
}

export default Home;
