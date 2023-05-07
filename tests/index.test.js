describe("Find sum of numbers", () => {
    const desc = "<p>Find sum of numbers</p>";

    describe(desc, () => {
        it("should return 10", () => {
            const result = getSum(7, 3);
            expect(result).toBe(10);
        })
    })
})


describe("Find difference of numbers", () => {
    const desc = "<p>Find difference of numbers</p>";

    describe(desc, () => {
        it("should return 5", () => {
            const result = getDifference(15, 10);
            expect(result).toBe(5);
        })
    })
})


describe("Find product of numbers", () => {
    const desc = "<p>Find product of numbers</p>";

    describe(desc, () => {
        it("should return 200", () => {
            const result = getProduct(20, 10);
            expect(result).toBe(200);
        })
    })
})


describe("Find division of numbers", () => {
    const desc = "<p>Find division of numbers</p>";

    describe(desc, () => {
        it("should return 6", () => {
            const result = getDivision(24, 4);
            expect(result).toBe(6);
        })
    })
})


describe("Find the smallest element in array", () => {
    const desc = "<p>Find the smallest element in array</p>";

    describe(desc, () => {
        it("should return -8", () => {
            const result = findMin([0, 22, 'anna', 'hello', 45, -8, 0]);
            expect(result).toBe(-8);
        })
    })
})


describe("Find the biggest element in array", () => {
    const desc = "<p>Find the biggest element in array</p>";

    describe(desc, () => {
        it("should return 26666", () => {
            const result = findMax(['jack', 105, 26666, -10, 'yes', 22, 'no', 89]);
            expect(result).toBe(26666);
        })
    })
})


describe("Get value increment", () => {
    const desc = "<p>Get value increment</p>";

    describe(desc, () => {
        it("should return 5", () => {
            let acc = new Accumulator(4);
            acc.increment();
        expect(acc.value).toBe(5);
    });
  }); 
});


describe("Get value decrement", () => {
        const desc = "<p>Get value decrement</p>";

        describe(desc, () => {
            it("should return 4", () => {
                let acc = new Accumulator(5);
                acc.decrement();
            expect(acc.value).toBe(4);
        });
      }); 
    });


describe("Check CancelableAccumulator increment method", () => {
        const desc = "<p>Check CancelableAccumulator increment method</p>";

        describe(desc, () => {
            it("should return 3", () => {
                let Cacc = new CancelableAccumulator(2);
                Cacc.increment();
            expect(Cacc.value).toBe(3);
        });
      }); 
    });

describe("Check clear method", () => {
        const desc = "<p>Check clear method</p>";

        describe(desc, () => {
            it("should return 4", () => {
                let Cacc = new CancelableAccumulator(4);
                Cacc.clear();
            expect(Cacc.value).toBe(4);
        });
      }); 
    });


    describe("Simulate 'click'", () => {
        const desc = "<p>Simulate 'click'</p>";

        describe(desc, () => {

            it("should toggle the photo class when called", function() {

                let photo = document.createElement("div");
                photo.id = "photo";
                let isEnlarged = false;
                spyOn(photo.classList, "toggle");
            
                isEnlarged = simulateClick(photo, isEnlarged);
            
                expect(photo.classList.toggle).toHaveBeenCalled();
                expect(isEnlarged).toBe(true);
            
                isEnlarged = simulateClick(photo, isEnlarged);
            
                expect(photo.classList.toggle).toHaveBeenCalled();
                expect(isEnlarged).toBe(false);
        });
       });
      });



      describe('Check scrollIntoView function', () => {
          const desc = "<p>Check scrollIntoView function</p>";

          describe(desc, () => {
            it('should return ".summary" for "KeyA" event code', () => {
                const event = new KeyboardEvent('keydown', { code: 'KeyA' });
                expect(scrollIntoView(event)).toBe('.summary');
            
              });
            
              it('should return ".skills" for "KeyB" event code', () => {
                const event = new KeyboardEvent('keydown', { code: 'KeyB' });
                expect(scrollIntoView(event)).toBe('.skills1');
            
              });
            
              it('should return ".work" for "KeyC" event code', () => {
                const event = new KeyboardEvent('keydown', { code: 'KeyC' });
                expect(scrollIntoView(event)).toBe('.work');
            
              });
            
              it('should return ".education" for "KeyD" event code', () => {
                const event = new KeyboardEvent('keydown', { code: 'KeyD' });
                expect(scrollIntoView(event)).toBe('.education');
            
              });
          })
      });
