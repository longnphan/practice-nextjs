"use client";

interface Idata {
  title: string;
  message: string;
}

export default function Home() {
  const createPost = async e => {
    e.preventDefault();

    try {
      const response = await fetch("/api/posts/new", {
        method: "POST",
        body: JSON.stringify({
          title: "Test123",
          message: "Message123",
        }),
      });

      console.log("Post was created");
      alert("sucessful")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1 className="text-2xl text-center">Blog:</h1>
      <form>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-96 text-slate-700"
          />
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="message" className="text-lg">
            Message:
          </label>
          <input
            type="text"
            name="message"
            id="message"
            className="w-96 text-slate-700"
          />
        </div>
      </form>

      <button type="submit" onClick={createPost} className="p-2 mt-2 bg-blue-500">
        Submit
      </button>
    </main>
  );
}
