export const ChangeBg = ({ colors, setCurrent }) => {
  return (
    <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div class="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        {colors?.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrent(item.color)}
            class="outline-none px-4 py-1 rounded-full shadow-lg font-medium cursor-pointer transition active:scale-95"
            style={{
              backgroundColor: item.color,
              color: ["white", "yellow", "Green"].includes(item.color.toLowerCase())
                ? "black"
                : "white",
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};