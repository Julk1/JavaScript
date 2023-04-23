describe("Find sum of numbers", () => {
    const desc = "<p>Find sum of numbers</p>";

    describe(desc, () => {
        it("should return 10", () => {
            const result = getSum(6, 4);
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
        it("should return 100", () => {
            const result = getProduct(10, 10);
            expect(result).toBe(100);
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
        it("should return -7", () => {
            const result = findSmallestElem([0, 12, 'cat', 'hello', 25, -7, 10, 0]);
            expect(result).toBe(-7);
        })
    })
})


describe("Find the biggest element in array", () => {
    const desc = "<p>Find the biggest element in array</p>";

    describe(desc, () => {
        it("should return 10023", () => {
            const result = findBiggestElem(['js', 105, 10023, -10, 'is', 12, 'awesome', 75]);
            expect(result).toBe(10023);
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
            it("should return 3", () => {
                let acc = new Accumulator(4);
                acc.decrement();
            expect(acc.value).toBe(3);
        });
      }); 
    });


    describe("Check CancelableAccumulator increment method", () => {
        const desc = "<p>Check CancelableAccumulator increment method</p>";

        describe(desc, () => {
            it("should return 2", () => {
                let Cacc = new CancelableAccumulator(1);
                Cacc.increment();
            expect(Cacc.value).toBe(2);
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
            it('should return ".summary" for "KeyA" or "KeyФ" event code', () => {
                const event = new KeyboardEvent('keydown', { code: 'KeyA' });
                expect(scrollIntoView(event)).toBe('.summary');
            
                const event2 = new KeyboardEvent('keydown', { code: 'KeyФ' });
                expect(scrollIntoView(event2)).toBe('.summary');
              });
            
              it('should return ".skills" for "KeyB" or "KeyИ" event code', () => {
                const event = new KeyboardEvent('keydown', { code: 'KeyB' });
                expect(scrollIntoView(event)).toBe('.skills');
            
                const event2 = new KeyboardEvent('keydown', { code: 'KeyИ' });
                expect(scrollIntoView(event2)).toBe('.skills');
              });
            
              it('should return ".work" for "KeyC" or "KeyС" event code', () => {
                const event = new KeyboardEvent('keydown', { code: 'KeyC' });
                expect(scrollIntoView(event)).toBe('.work');
            
                const event2 = new KeyboardEvent('keydown', { code: 'KeyС' });
                expect(scrollIntoView(event2)).toBe('.work');
              });
            
              it('should return ".education" for "KeyD" or "KeyВ" event code', () => {
                const event = new KeyboardEvent('keydown', { code: 'KeyD' });
                expect(scrollIntoView(event)).toBe('.education');
            
                const event2 = new KeyboardEvent('keydown', { code: 'KeyВ' });
                expect(scrollIntoView(event2)).toBe('.education');
              });
          })
      });
