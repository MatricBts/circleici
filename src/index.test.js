test("adds 1 + 2 to equal 3", async () => {
  await new Promise((_, rej) => setTimeout(rej, 3000));
}, 4000);
