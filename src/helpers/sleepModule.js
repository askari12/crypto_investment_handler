const _sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

export async function sleep(ms) {
  await _sleep(ms);
};