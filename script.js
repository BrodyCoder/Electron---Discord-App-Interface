
        document.querySelector('.summary').addEventListener('click', function () {
            if (this.classList.contains('summary-visible1')) {
                this.classList.remove('summary-visible1')
                this.innerHTML = ' DOORBELL';

            } else {
                this.classList.add('summary-visible1')
                this.innerHTML = ' DOORBELL';

            }
        })

        document.querySelector('.summary2').addEventListener('click', function () {
            if (this.classList.contains('summary-visible2')) {
                this.classList.remove('summary-visible2')
                this.innerHTML = ' INFO';

            } else {
                this.classList.add('summary-visible2')
                this.innerHTML = ' INFO';

            }
        })

        document.querySelector('.summary3').addEventListener('click', function () {
            if (this.classList.contains('summary-visible3')) {
                this.classList.remove('summary-visible3')
                this.innerHTML = ' LOUNGES';

            } else {
                this.classList.add('summary-visible3')
                this.innerHTML = ' LOUNGES';

            }
        })

          
          






