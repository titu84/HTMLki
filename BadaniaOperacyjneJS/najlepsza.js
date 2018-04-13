function grab(what) {
    if (what[0] == '#') {
        return document.querySelector(what);
    } else {
        return document.querySelectorAll(what);
    }
}
function getFloat(what) {
    return grab(what).value != "" ? parseFloat(grab(what).value) : null
}
function log(what, klasa) {
    let p = document.createElement('p')
    p.innerText = what
    p.classList.add(klasa)
    grab('#wynik1').appendChild(p)
    //console.log(what)
}
function obliczFunkcjeCeluArbitralnie(x1, x2) {
    for (let i = 2; i < 100; i++) {
        if ((x1 * i) % x2 == 0) {
            return (x1 * i)
        }
    }
    return -1;
}
function obliczFunkcjeCelu(x1, x2, fc) {
    return (x1 * fc.x1) + (x2 * fc.x2)
}
function funkcjaWejsciowa(czyX = true, x1, x2, x3, x4, x5, x6, znak, wynik, czyFunkcjacelu = false) {

    this.x1 = x1
    this.x2 = x2
    this.x3 = x3
    this.x4 = x4
    this.x5 = x5
    this.x6 = x6
    this.znak = znak
    this.wynik = wynik
    this.tekst = ''
    this.tekstBrzegowe = ''
    this.Pisz = function () {
        if (czyFunkcjacelu == true) {
            let x1, x2, x3, x4, x5, x6
            x1 = this.x1 != null ? 'x1' : ''
            x2 = this.x2 != null ? ',x2' : ''
            x3 = this.x3 != null ? ',x3' : ''
            x4 = this.x4 != null ? ',x4' : ''
            x5 = this.x5 != null ? ',x5' : ''
            x6 = this.x6 != null ? ',x6' : ''
            this.tekst = 'F(' + x1 + x2 + x3 + x4 + x5 + x6 + ')='
        }
        if (x1 != null && x1 != 0) {
            this.tekst += x1 + 'x1'
        }
        if (x2 != null) {
            const sign = x2 >= 0 ? '+' : ''
            this.tekst += sign + x2 + 'x2'
        }
        if (x3 != null) {
            const sign = x3 >= 0 ? '+' : ''
            this.tekst += sign + x3 + 'x3'
        }
        if (x4 != null) {
            const sign = x4 >= 0 ? '+' : ''
            this.tekst += sign + x4 + 'x4'
        }
        if (x5 != null) {
            const sign = x5 >= 0 ? '+' : ''
            this.tekst += sign + x5 + 'x5'
        }
        if (x6 != null) {
            const sign = x6 >= 0 ? '+' : ''
            this.tekst += sign + x6 + 'x6'
        }
        if (znak != null) {
            if (czyFunkcjacelu == true)
                this.tekst += '->' + this.znak
            else
                this.tekst += this.znak
        }
        if (wynik != null) {
            this.tekst += wynik
        }
        if (!czyX) {
            this.tekst = this.tekst.split('x').join('y')
        }
        return this.tekst
    }
    this.PiszBrzegowe = function () {

        let x1, x2, x3, x4, x5, x6
        x1 = this.x1 != null ? 'x1' : ''
        x2 = this.x2 != null ? ',x2' : ''
        x3 = this.x3 != null ? ',x3' : ''
        x4 = this.x4 != null ? ',x4' : ''
        x5 = this.x5 != null ? ',x5' : ''
        x6 = this.x6 != null ? ',x6' : ''
        this.tekstBrzegowe = x1 + x2 + x3 + x4 + x5 + x6 + '>=0'
        if (!czyX) {
            this.tekstBrzegowe = this.tekstBrzegowe.split('x').join('y')
        }
        return this.tekstBrzegowe
    }
    this.PiszRownanie = () => {
        let t = ''
        if (this.x1 != null) {
            t += this.x1 + 'x1'
        }
        if (this.x2 != null) {
            const sign = this.x2 >= 0 ? '+' : ''
            t += sign + this.x2 + 'x2'
        }
        if (this.x3 != null) {
            const sign = this.x3 >= 0 ? '+' : ''
            t += sign + this.x3 + 'x3'
        }
        if (this.x4 != null) {
            const sign = this.x4 >= 0 ? '+' : ''
            t += sign + this.x4 + 'x4'
        }
        if (this.x5 != null) {
            const sign = this.x5 >= 0 ? '+' : ''
            t += sign + this.x5 + 'x5'
        }
        if (this.x6 != null) {
            const sign = this.x6 >= 0 ? '+' : ''
            t += sign + this.x6 + 'x6'
        }
        if (this.wynik != null)
            t += '=' + this.wynik
        else {
            t += '=' + this.znak
        }
        return t
    }
}
function zmienZnak(znak) {
    return znak == '<' ? '>' : znak == '>' ? '<' : znak == '>=' ? '<=' : znak == '<=' ? '>=' : znak == 'MIN' ? 'MAX' : znak == 'MAX' ? 'MIN' : '='
}
function fun(czyX = false, y1, y2, znak, wynik, prosta, jakX1 = null, jakX2 = null) {
    this.y1 = y1
    this.y2 = y2
    this.jakX1 = jakX1
    this.jakX2 = jakX2
    this.jak = 'wcale'
    this.znak = znak
    this.wynik = wynik
    this.tekst = ''
    this.prosta = prosta
    this.wspolrzednaX1 = () => {
        return (wynik / y1)
    }
    this.wspolrzednaX2 = () => {
        return (wynik / y2)
    }
    this.Jak = () => {
        if (this.jakX1 != null && this.jakX2 != null && (this.jakX1 * y1) + (this.jakX2 * y2) == this.wynik) {
            this.jak = 'slabo'
        }
        else if (this.jakX1 != null && this.jakX2 != null && (this.jakX1 * y1) + (this.jakX2 * y2) > this.wynik) {
            this.jak = 'ostro'
        }
        return this.jak
    }
    this.Pisz = () => {
        if (y1 == null && y2 == null) {
            return this.tekst;
        }
        if (y1 != null && y1 != 0) {
            this.tekst += y1 + 'x1'
        }
        if (y2 != null) {
            const sign = y2 >= 0 ? '+' : ''
            this.tekst += sign + y2 + 'x2'
        }
        if (znak != null) {
            this.tekst += this.znak
        }
        if (wynik != null) {
            this.tekst += wynik
        }
        if (prosta != null) {
            this.tekst += ' (prosta ' + prosta + ') , '
        }
        if (y1 != null && y1 != 0) {
            this.tekst += y1 + 'x1'
        }
        if (y2 != null) {
            const sign = y2 >= 0 ? '+' : ''
            this.tekst += sign + y2 + 'x2='
        }
        if (wynik != null) {
            this.tekst += this.wynik
        }
        if (y1 != null && y1 != 0) {
            this.tekst += ', x1=' + this.wspolrzednaX1()
        }
        if (y2 != null && y2 != 0) {
            this.tekst += ' , x2=' + this.wspolrzednaX2()
        }
        if (!czyX) {
            this.tekst = this.tekst.split('x').join('y')
        }
        return this.tekst
    }
    this.PiszRownanie = () => {
        let t = ''
        if (this.y1 != null) {
            t += this.y1 + 'y1'
        }
        if (this.y2 != null) {
            const sign = this.y2 >= 0 ? '+' : ''
            t += sign + this.y2 + 'y2'
        }
        t += '=' + this.wynik
        if (!czyX) {
            t = t.split('x').join('y')
        }
        return t
    }
}
function liczUkladRownan(fun1, fun2, a1, b1, c1, a2, b2, c2) {
    let result = { x1: null, x2: null }
    this.a1 = fun1 != null ? fun1.y1 : a1
    this.b1 = fun1 != null ? fun1.y2 : b1
    this.c1 = fun1 != null ? fun1.wynik : c1
    this.a2 = fun2 != null ? fun2.y1 : a2
    this.b2 = fun2 != null ? fun2.y2 : b2
    this.c2 = fun2 != null ? fun2.wynik : c2
    if (a1 == 0 || b1 == 0 || a2 == 0 || b2 == 0) {
        if (a1 == 0 && b1 != 0) {
            result.x2 = c1 / b1
        }
        if (a1 != 0 && b1 == 0) {
            result.x1 = c1 / a1
        }
        if (a2 == 0 && b2 != 0) {
            result.x2 = c1 / b2
        }
        if (a2 != 0 && b2 == 0) {
            result.x1 = c1 / a2
        }
        if (result.x1 != null && result.x2 != null)
            return result;
        if (result.x1 != null && result.x2 == null) {
            result.x2 = (c2 - (a2 * result.x1)) / (b2)
        }
        if (result.x1 == null && result.x2 != null) {
            result.x1 = (c2 - (b2 * result.x1)) / (a2)
        }
        return result;
    }
    else {
        w = this.a1 * this.b2 - this.a2 * this.b1;
        if (w == 0) {
            return result
        }
        else {
            wx = this.c1 * this.b2 - this.c2 * this.b1;
            wy = this.a1 * this.c2 - this.a2 * this.c1;
            result.x1 = wx / w;
            result.x2 = wy / w;
            return result
        }
    }
}
function czySpelniaNierownosc(x1, x2, fun) {
    if (fun.y1 == null)
        return true;
    let znak = fun.znak
    switch (znak) {
        case '=':
            if ((x1 * fun.y1) + (x2 * fun.y2) == fun.wynik)
                return true
            else
                return false
        case '>=':
            if ((x1 * fun.y1) + (x2 * fun.y2) >= fun.wynik)
                return true
            else
                return false
        case '<=':
            if ((x1 * fun.y1) + (x2 * fun.y2) <= fun.wynik)
                return true
            else
                return false
        case '<':
            if ((x1 * fun.y1) + (x2 * fun.y2) < fun.wynik)
                return true
            else
                return false
        case '>':
            if ((x1 * fun.y1) + (x2 * fun.y2) > fun.wynik)
                return true
            else
                return false
        default:
            return false
    }
}
function funkcjaTabelka(dualna, czyX = false) {
    this.dualna = dualna
    this.tekst = ''
    this.funkcjaJednakowego = () => {
        return obliczFunkcjeCeluArbitralnie(dualna.funkcjaCelu.x1, dualna.funkcjaCelu.x2)
    }
    //rozwiazac uklady rówań i sprawdzić które rozwiązania dadzą max lub min
    this.Pisz = () => {
        let czego
        let max = false
        let optymalne
        let y1
        let y2
        let prosta1
        let prosta2
        if (dualna.funkcjaCelu.znak == 'MAX') {
            czego = 'zysku'
            max = true
            optymalne = 0;
        }
        else {
            czego = 'kosztu'
            optymalne = Number.MAX_VALUE
        }
        function nadpisanieOptymalnej(x1, x2, dualna, i) {
            if (czySpelniaNierownosc(x1, x2, dualna.fun1)
                && czySpelniaNierownosc(x1, x2, dualna.fun2)
                && czySpelniaNierownosc(x1, x2, dualna.fun3)
                && czySpelniaNierownosc(x1, x2, dualna.fun4)
                && czySpelniaNierownosc(x1, x2, dualna.fun5)
                && czySpelniaNierownosc(x1, x2, dualna.fun6)) {
                if ((max && obliczFunkcjeCelu(x1, x2, dualna.funkcjaCelu) >= optymalne) || (!max && obliczFunkcjeCelu(x1, x2, dualna.funkcjaCelu) <= optymalne)) {
                    optymalne = obliczFunkcjeCelu(x1, x2, dualna.funkcjaCelu)
                    y1 = x1
                    y2 = x2
                    prosta1 = dualna.fun1.prosta
                    prosta2 = dualna.fun2.prosta
                }                               
            }
        }
        this.tekst = "Linia jednakowego " + czego + ' f ′ ' + new fun(false, this.dualna.funkcjaCelu.x1, this.dualna.funkcjaCelu.x2, '=', this.funkcjaJednakowego()).PiszRownanie()
        for (let i = 0; i < 1; i++) {
            if (this.dualna.fun1 != null && this.dualna.fun2 != null && liczUkladRownan(dualna.fun1, dualna.fun2).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun1, dualna.fun2).x1
                let x2 = liczUkladRownan(dualna.fun1, dualna.fun2).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun1 != null && this.dualna.fun3 != null && liczUkladRownan(dualna.fun1, dualna.fun3).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun1, dualna.fun3).x1
                let x2 = liczUkladRownan(dualna.fun1, dualna.fun3).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun1 != null && this.dualna.fun4 != null && liczUkladRownan(dualna.fun1, dualna.fun4).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun1, dualna.fun4).x1
                let x2 = liczUkladRownan(dualna.fun1, dualna.fun4).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun1 != null && this.dualna.fun5 != null && liczUkladRownan(dualna.fun1, dualna.fun5).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun1, dualna.fun5).x1
                let x2 = liczUkladRownan(dualna.fun1, dualna.fun5).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun1 != null && this.dualna.fun6 != null && liczUkladRownan(dualna.fun1, dualna.fun6).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun1, dualna.fun6).x1
                let x2 = liczUkladRownan(dualna.fun1, dualna.fun6).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun2 != null && this.dualna.fun3 != null && liczUkladRownan(dualna.fun2, dualna.fun3).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun2, dualna.fun3).x1
                let x2 = liczUkladRownan(dualna.fun2, dualna.fun3).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun2 != null && this.dualna.fun4 != null && liczUkladRownan(dualna.fun2, dualna.fun4).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun2, dualna.fun4).x1
                let x2 = liczUkladRownan(dualna.fun2, dualna.fun4).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun2 != null && this.dualna.fun5 != null && liczUkladRownan(dualna.fun2, dualna.fun5).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun2, dualna.fun5).x1
                let x2 = liczUkladRownan(dualna.fun2, dualna.fun5).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun2 != null && this.dualna.fun6 != null && liczUkladRownan(dualna.fun2, dualna.fun6).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun2, dualna.fun6).x1
                let x2 = liczUkladRownan(dualna.fun2, dualna.fun6).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun3 != null && this.dualna.fun4 != null && liczUkladRownan(dualna.fun3, dualna.fun4).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun3, dualna.fun4).x1
                let x2 = liczUkladRownan(dualna.fun3, dualna.fun4).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun3 != null && this.dualna.fun5 != null && liczUkladRownan(dualna.fun3, dualna.fun5).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun3, dualna.fun5).x1
                let x2 = liczUkladRownan(dualna.fun3, dualna.fun5).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun3 != null && this.dualna.fun6 != null && liczUkladRownan(dualna.fun3, dualna.fun6).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun3, dualna.fun6).x1
                let x2 = liczUkladRownan(dualna.fun3, dualna.fun6).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun4 != null && this.dualna.fun5 != null && liczUkladRownan(dualna.fun4, dualna.fun5).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun4, dualna.fun5).x1
                let x2 = liczUkladRownan(dualna.fun4, dualna.fun5).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun4 != null && this.dualna.fun6 != null && liczUkladRownan(dualna.fun4, dualna.fun6).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun4, dualna.fun6).x1
                let x2 = liczUkladRownan(dualna.fun4, dualna.fun6).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (this.dualna.fun5 != null && this.dualna.fun6 != null && liczUkladRownan(dualna.fun5, dualna.fun6).x1 != null) {
                let x1 = liczUkladRownan(dualna.fun5, dualna.fun6).x1
                let x2 = liczUkladRownan(dualna.fun5, dualna.fun6).x2
                nadpisanieOptymalnej(x1, x2, this.dualna,i)
            }
            if (optymalne == Number.MAX_VALUE) {
                this.tekst += '\nNie ma pojedynczego rozwiązania - patrz na wykres ;)'
            }
            else {
                this.tekst += '\nukład równań prostych ' + prosta1 + ' i ' + prosta2
                this.tekst += '\npierwsza wpólrzedna =' + y1
                this.tekst += '\ndruga wpólrzedna =' + y2
                this.tekst += '\nfunkcja celu =' + optymalne
                this.tekst += "\nRozwiązaniem jest wektor Y { y1* = " + y1 + ', y2* = ' + y2 + '},\na wartość funkcji celu wynosi ' + optymalne
            }
        }
        // słabo ostro
        if (!czyX) {
            this.tekst += '\n\nSprawdzamy jak spełnione są nierówności dla punktu (' + y1 + ',' + y2 + ')'

            if (this.dualna.fun1.y1 != null) {
                this.dualna.fun1.jakX1 = y1;
                this.dualna.fun1.jakX2 = y2;
                this.tekst += '\n' + this.dualna.fun1.y1 + 'y1+' + this.dualna.fun1.y2 + 'y2' + this.dualna.fun1.znak + this.dualna.fun1.wynik + ' :' + this.dualna.fun1.Jak()
            }
            if (this.dualna.fun2.y1 != null) {
                this.dualna.fun2.jakX1 = y1;
                this.dualna.fun2.jakX2 = y2;
                this.tekst += '\n' + this.dualna.fun2.y1 + 'y1+' + this.dualna.fun2.y2 + 'y2' + this.dualna.fun2.znak + this.dualna.fun2.wynik + ' :' + this.dualna.fun2.Jak()
            }
            if (this.dualna.fun3.y1 != null) {
                this.dualna.fun3.jakX1 = y1;
                this.dualna.fun3.jakX2 = y2;
                this.tekst += '\n' + this.dualna.fun3.y1 + 'y1+' + this.dualna.fun3.y2 + 'y2' + this.dualna.fun3.znak + this.dualna.fun3.wynik + ' :' + this.dualna.fun3.Jak()
            }
            if (this.dualna.fun4.y1 != null) {
                this.dualna.fun4.jakX1 = y1;
                this.dualna.fun4.jakX2 = y2;
                this.tekst += '\n' + this.dualna.fun4.y1 + 'y1+' + this.dualna.fun4.y2 + 'y2' + this.dualna.fun4.znak + this.dualna.fun4.wynik + ' :' + this.dualna.fun4.Jak()
            }
            if (this.dualna.fun5.y1 != null) {
                this.dualna.fun5.jakX1 = y1;
                this.dualna.fun5.jakX2 = y2;
                this.tekst += '\n' + this.dualna.fun5.y1 + 'y1+' + this.dualna.fun5.y2 + 'y2' + this.dualna.fun5.znak + this.dualna.fun5.wynik + ' :' + this.dualna.fun5.Jak()
            }
            if (this.dualna.fun6.y1 != null) {
                this.dualna.fun6.jakX1 = y1;
                this.dualna.fun6.jakX2 = y2;
                this.tekst += '\n' + this.dualna.fun6.y1 + 'y1+' + this.dualna.fun6.y2 + 'y2' + this.dualna.fun6.znak + this.dualna.fun6.wynik + ' :' + this.dualna.fun6.Jak()
            }
        }
        if (czyX) {
            this.tekst = this.tekst.split('y').join('x').split('Y').join('X')
        }
        return this.tekst
    }
}
function funkcjaDualna(czyX = false, f1, f2, f3, f4, f5, f6, fc, czyGraficznie = false) {

    this.fun1
    this.fun2
    this.fun3
    this.fun4
    this.fun5
    this.fun6
    this.funkcjaCelu
    this.znak
    if (czyGraficznie) {
        this.fun1 = new fun(czyX, f1.x1, f1.x2, f1.znak, f1.wynik, 'a')
        this.fun2 = new fun(czyX, f2.x1, f2.x2, f2.znak, f2.wynik, 'b')
        this.fun3 = new fun(czyX, f3.x1, f3.x2, f3.znak, f3.wynik, 'c')
        this.fun4 = new fun(czyX, f4.x1, f4.x2, f4.znak, f4.wynik, 'd')
        this.fun5 = new fun(czyX, f5.x1, f5.x2, f5.znak, f5.wynik, 'e')
        this.fun6 = new fun(czyX, f6.x1, f6.x2, f6.znak, f6.wynik, 'f')
        this.funkcjaCelu = new funkcjaWejsciowa(czyX, fc.x1, fc.x2, null, null, null, null, fc.znak, null, true)
        this.znak = f1.znak;
    }
    else {
        this.fun1 = new fun(czyX, f1.x1, f2.x1, zmienZnak(f1.znak), fc.x1, 'a')
        this.fun2 = new fun(czyX, f1.x2, f2.x2, zmienZnak(f1.znak), fc.x2, 'b')
        this.fun3 = new fun(czyX, f1.x3, f2.x3, zmienZnak(f1.znak), fc.x3, 'c')
        this.fun4 = new fun(czyX, f1.x4, f2.x4, zmienZnak(f1.znak), fc.x4, 'd')
        this.fun5 = new fun(czyX, f1.x5, f2.x5, zmienZnak(f1.znak), fc.x5, 'e')
        this.fun6 = new fun(czyX, f1.x6, f2.x6, zmienZnak(f1.znak), fc.x6, 'f')
        this.funkcjaCelu = new funkcjaWejsciowa(czyX, f1.wynik, f2.wynik, null, null, null, null, zmienZnak(fc.znak), null, true)
        this.znak = zmienZnak(fc.znak);
    }

    this.wynik = null
    this.tekst = ''
    this.tekstBrzegowe = ''
    this.Pisz = () => {

        log("Warukni ograniczające", 'boldFont')
        log(this.fun1.Pisz())
        log(this.fun2.Pisz())
        log(this.fun3.Pisz())
        log(this.fun4.Pisz())
        log(this.fun5.Pisz())
        log(this.fun6.Pisz())
        log("Warukni brzegowe", 'boldFont')
        log(this.PiszBrzegowe())
        log("Funkcja celu", 'boldFont')
        log(this.funkcjaCelu.Pisz())
        return this.tekst
    }
    this.PiszBrzegowe = function () {

        this.tekstBrzegowe = 'x1,x2>=0'
        if (!czyX) {
            this.tekstBrzegowe = this.tekstBrzegowe.split('x').join('y')
        }
        return this.tekstBrzegowe
    }
}
let wybor;
grab('#type1').addEventListener('change', () => {
    grab('#wynik1').innerHTML = ''
    grab('#dwaWarunki').classList.add('displayBlock')
    grab('#dwaWarunki').classList.remove('displayNone')
    grab('#dwieZmianne').classList.add('displayNone')
    grab('#dwieZmianne').classList.remove('displayBlock')
    grab('#obliczDiv').classList.add('displayBlock')
    grab('#obliczDiv').classList.remove('displayNone')
    wybor = 'type1'
})
grab('#type2').addEventListener('change', () => {
    grab('#wynik1').innerHTML = ''
    grab('#dwaWarunki').classList.remove('displayBlock')
    grab('#dwaWarunki').classList.add('displayNone')
    grab('#dwieZmianne').classList.add('displayBlock')
    grab('#dwieZmianne').classList.remove('displayNone')
    grab('#obliczDiv').classList.add('displayBlock')
    grab('#obliczDiv').classList.remove('displayNone')
    wybor = 'type2'
})
grab('#oblicz').addEventListener('click', () => {
    grab('#wynik1').innerHTML = ''// czyszczenie wynik1 z wszystkiego
    if (wybor == 'type1') {
        let x11 = getFloat('#x11')
        let x12 = getFloat('#x12')
        let x13 = getFloat('#x13')
        let x14 = getFloat('#x14')
        let x15 = getFloat('#x15')
        let x16 = getFloat('#x16')
        let selector11 = grab('#selector11').value
        let wynik11 = getFloat('#wynik11')
        let x21 = getFloat('#x21')
        let x22 = getFloat('#x22')
        let x23 = getFloat('#x23')
        let x24 = getFloat('#x24')
        let x25 = getFloat('#x25')
        let x26 = getFloat('#x26')
        let selector21 = grab('#selector21').value
        let wynik21 = getFloat('#wynik21')
        let x31 = getFloat('#x31')
        let x32 = getFloat('#x32')
        let x33 = getFloat('#x33')
        let x34 = getFloat('#x34')
        let x35 = getFloat('#x35')
        let x36 = getFloat('#x36')
        let selector31 = grab('#selector31').value
        let warunek1 = new funkcjaWejsciowa(true, x11, x12, x13, x14, x15, x16, selector11, wynik11)
        let warunek2 = new funkcjaWejsciowa(true, x21, x22, x23, x24, x25, x26, selector21, wynik21)
        let funkcjaCelu = new funkcjaWejsciowa(true, x31, x32, x33, x34, x35, x36, selector31, null, true)
        log("Program Prymarny", 'boldFontUnderline')
        log("Warukni ograniczające", 'boldFont')
        log(warunek1.Pisz())
        log(warunek2.Pisz())
        log("Warukni brzegowe", 'boldFont')
        log(funkcjaCelu.PiszBrzegowe())
        log("Funkcja celu", 'boldFont')
        log(funkcjaCelu.Pisz())
        log("Program Dualny", 'boldFontUnderline')
        let dualna = new funkcjaDualna(false, warunek1, warunek2, null, null, null, null, funkcjaCelu, false)
        log(dualna.Pisz())
        log("Tu rysuj wykres", 'boldFontUnderline')
        let tabelka = new funkcjaTabelka(dualna)
        log(tabelka.Pisz())
        log("Wracamy do programu prymarnego", 'boldFontUnderline')

        if (tabelka.dualna.fun1.jak == 'ostro') {
            warunek1.x1 = null
            warunek2.x1 = null
            funkcjaCelu.x1 = null
        }
        if (tabelka.dualna.fun2.jak == 'ostro') {
            warunek1.x2 = null
            warunek2.x2 = null
            funkcjaCelu.x2 = null
        }
        if (tabelka.dualna.fun3.jak == 'ostro') {
            warunek1.x3 = null
            warunek2.x3 = null
            funkcjaCelu.x3 = null
        }
        if (tabelka.dualna.fun4.jak == 'ostro') {
            warunek1.x4 = null
            warunek2.x4 = null
            funkcjaCelu.x4 = null
        }
        if (tabelka.dualna.fun5.jak == 'ostro') {
            warunek1.x5 = null
            warunek2.x5 = null
            funkcjaCelu.x5 = null
        }
        if (tabelka.dualna.fun6.jak == 'ostro') {
            warunek1.x6 = null
            warunek2.x6 = null
            funkcjaCelu.x6 = null
        }
        log(warunek1.PiszRownanie())
        log(warunek2.PiszRownanie())
        log(funkcjaCelu.PiszRownanie())
        let y1 = null
        let y2 = null
        let y3 = null
        let y4 = null
        let y5 = null
        let y6 = null
        if (warunek1.x1 != null) {
            if (y1 == null)
                y1 = warunek1.x1
        }
        if (warunek1.x2 != null) {
            if (y1 == null)
                y1 = warunek1.x2
            else if (y2 == null)
                y2 = warunek1.x2
        }
        if (warunek1.x3 != null) {
            if (y1 == null)
                y1 = warunek1.x3
            else if (y2 == null)
                y2 = warunek1.x3
        }
        if (warunek1.x4 != null) {
            if (y1 == null)
                y1 = warunek1.x4
            else if (y2 == null)
                y2 = warunek1.x4
        }
        if (warunek1.x5 != null) {
            if (y1 == null)
                y1 = warunek1.x5
            else if (y2 == null)
                y2 = warunek1.x5
        }
        if (warunek1.x6 != null) {
            if (y1 == null)
                y1 = warunek1.x6
            else if (y2 == null)
                y2 = warunek1.x6
        }
        if (warunek2.x1 != null) {
            if (y3 == null)
                y3 = warunek2.x1
        }
        if (warunek2.x2 != null) {
            if (y3 == null)
                y3 = warunek2.x2
            else if (y4 == null)
                y4 = warunek2.x2
        }
        if (warunek2.x3 != null) {
            if (y3 == null)
                y3 = warunek2.x3
            else if (y4 == null)
                y4 = warunek2.x3
        }
        if (warunek2.x4 != null) {
            if (y3 == null)
                y3 = warunek2.x4
            else if (y4 == null)
                y4 = warunek2.x4
        }
        if (warunek2.x5 != null) {
            if (y3 == null)
                y3 = warunek2.x5
            else if (y4 == null)
                y4 = warunek2.x5
        }
        if (warunek2.x6 != null) {
            if (y3 == null)
                y3 = warunek2.x6
            else if (y4 == null)
                y4 = warunek2.x6
        }

        if (funkcjaCelu.x1 != null) {
            if (y5 == null)
                y5 = funkcjaCelu.x1
        }
        if (funkcjaCelu.x2 != null) {
            if (y5 == null)
                y5 = funkcjaCelu.x2
            else if (y6 == null)
                y6 = funkcjaCelu.x2
        }
        if (funkcjaCelu.x3 != null) {
            if (y5 == null)
                y5 = funkcjaCelu.x3
            else if (y6 == null)
                y6 = funkcjaCelu.x3
        }
        if (funkcjaCelu.x4 != null) {
            if (y5 == null)
                y5 = funkcjaCelu.x4
            else if (y6 == null)
                y6 = funkcjaCelu.x4
        }
        if (funkcjaCelu.x5 != null) {
            if (y5 == null)
                y5 = funkcjaCelu.x5
            else if (y6 == null)
                y6 = funkcjaCelu.x5
        }
        if (funkcjaCelu.x6 != null) {
            if (y5 == null)
                y5 = funkcjaCelu.x6
            else if (y6 == null)
                y6 = funkcjaCelu.x6
        }
        let xx1 = liczUkladRownan(null, null, y1, y2, warunek1.wynik, y3, y4, warunek2.wynik).x1
        let xx2 = liczUkladRownan(null, null, y1, y2, warunek1.wynik, y3, y4, warunek2.wynik).x2
        log('x1 = ' + xx1)
        log('x2 = ' + xx2)
        log('F(' + xx1 + ', ' + xx2 + ')=' + y5 + '*' + xx1 + '+' + y6 + '*' + xx2 + '=' + ((y5 * xx1) + (y6 * xx2)))


    }
    else if (wybor == 'type2') {
        let x111 = getFloat('#x111')
        let x112 = getFloat('#x112')
        let x121 = getFloat('#x121')
        let x122 = getFloat('#x122')
        let x131 = getFloat('#x131')
        let x132 = getFloat('#x132')
        let x141 = getFloat('#x141')
        let x142 = getFloat('#x142')
        let x151 = getFloat('#x151')
        let x152 = getFloat('#x152')
        let x161 = getFloat('#x161')
        let x162 = getFloat('#x162')
        let x171 = getFloat('#x171')
        let x172 = getFloat('#x172')
        let selector111 = grab('#selector111').value
        let wynik111 = getFloat('#wynik111')
        let selector121 = grab('#selector121').value
        let wynik121 = getFloat('#wynik121')
        let selector131 = grab('#selector131').value
        let wynik131 = getFloat('#wynik131')
        let selector141 = grab('#selector141').value
        let wynik141 = getFloat('#wynik141')
        let selector151 = grab('#selector151').value
        let wynik151 = getFloat('#wynik151')
        let selector161 = grab('#selector161').value
        let wynik161 = getFloat('#wynik161')
        let selector171 = grab('#selector171').value
        let w1 = new funkcjaWejsciowa(true, x111, x112, null, null, null, null, selector111, wynik111)
        let w2 = new funkcjaWejsciowa(true, x121, x122, null, null, null, null, selector121, wynik121)
        let w3 = new funkcjaWejsciowa(true, x131, x132, null, null, null, null, selector131, wynik131)
        let w4 = new funkcjaWejsciowa(true, x141, x142, null, null, null, null, selector141, wynik141)
        let w5 = new funkcjaWejsciowa(true, x151, x152, null, null, null, null, selector151, wynik151)
        let w6 = new funkcjaWejsciowa(true, x161, x162, null, null, null, null, selector161, wynik161)

        let fc = new funkcjaWejsciowa(true, x171, x172, null, null, null, null, selector171, null, true)
        log("Metoda graficzna", 'boldFontUnderline')
        let dualna = new funkcjaDualna(true, w1, w2, w3, w4, w5, w6, fc, true)
        log(dualna.Pisz())
        log("Tu rysuj wykres", 'boldFontUnderline')
        log(new funkcjaTabelka(dualna, true).Pisz())

    }
})