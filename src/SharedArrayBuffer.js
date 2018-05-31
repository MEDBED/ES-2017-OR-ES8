// The SharedArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer,
//  similar to the ArrayBuffer object, but in a way that they can be used to create views on shared memory.
//  Unlike an ArrayBuffer, a SharedArrayBuffer cannot become detached.

// create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// expected output: 8


//The Atomics object provides atomic operations as static methods.
// They are used with SharedArrayBuffer objects.

// When memory is shared, multiple threads can read and write the same data in memory. 
// Atomic operations make sure that predictable values are written and read,
//  that operations are finished before the next operation starts and that operations are not interrupted.

Atomics.add();
// Adds the provided value to the existing value at the specified index of the array.
//  Returns the old value at that index.


Atomics.and();
// Computes a bitwise AND on the value at the specified index of the array with the provided value. 
// Returns the old value at that index.

Atomics.compareExchange();
// Stores a value at the specified index of the array, if it equals a value.
//  Returns the old value.

Atomics.exchange();
// Stores a value at the specified index of the array. 
// Returns the old value.

Atomics.load();
// Returns the value at the specified index of the array.

Atomics.or();
// Computes a bitwise OR on the value at the specified index of the array with the provided value.
//  Returns the old value at that index.

Atomics.store();
//Stores a value at the specified index of the array. Returns the value.

Atomics.sub();
//Subtracts a value at the specified index of the array. Returns the old value at that index.

Atomics.xor();
//Computes a bitwise XOR on the value at the specified index of the array with the provided value. 
//Returns the old value at that index.

// The wait() and wake() methods are modeled on Linux futexes ("fast user-space mutex") and provide ways 
// for waiting until a certain condition becomes true and are typically used as blocking constructs.

Atomics.wait();
// Verifies that the specified index of the array still contains a value and sleeps awaiting or times out.
//  Returns either "ok", "not-equal", or "timed-out".
//   If waiting is not allowed in the calling agent then it throws an Error exception 
//   (most browsers will not allow wait() on the browser's main thread).

Atomics.wake();
// Wakes up agents that are waiting on the specified index of the array. 
// Returns the number of agents that were woken up.

Atomics.isLockFree(size);
// An optimization primitive that can be used to determine whether to use locks or atomic operations. 
// Returns true, if an atomic operation on arrays of the given element size will be implemented using
//  a hardware atomic operation (as opposed to a lock). Experts only.

