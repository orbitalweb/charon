
// hack - wait for display to come up
sleep(1000)

// test basic logging
console.log("hello - this is javascript land!")

// a pretend system - that mostly passes stuff up to rust
class System {
	make() {
		orbital_message("cube")
	}
}

// a bootstrap that makes a system
let system = new System()

// test invoke wrapper to make a cube
system.make()

// sleep and then test invoke wrapper to make a cube again
sleep(1000)
system.make()

// must return a string
"done"

