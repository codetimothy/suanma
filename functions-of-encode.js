eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) d[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return d[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "q X(){L y=x.w('V').z;J=C(y);K=E(J);x.w('S').z=K}q T(){L y=x.w('U').z;I=D(y);F=P(I);x.w('W').z=F}q C(1){o(v 1!=='r'){l.k(\"A B 1\");c}o(1.g===0||1.g<9){c}G{7(1)}H(M){l.k(\"1 R Q N O\");c}3 i=7(1.a(0,2));3 n=7(1.a(2,4));3 h=7(1.a(4,6));3 m=7(1.a(6,8));3 j=7(1.a(8,1.g));3 d=j^(h+m);3 p=m^d;3 t=h^d;3 u=i^d;3 s=n^d;e=u.b().f(2,'0')+s.b().f(2,'0')+t.b().f(2,'0')+p.b().f(2,'0')+d.b();l.k(\"C c : \"+e);c e}q E(1){o(v 1!=='r'){l.k(\"A B 1\");c}o(1.g===0||1.g<9){c}G{7(1)}H(M){l.k(\"1 R Q N O\");c}3 i=7(1.a(0,2));3 n=7(1.a(2,4));3 h=7(1.a(4,6));3 m=7(1.a(6,8));3 j=7(1.a(8,1.g));3 d=m^h;3 p=j^h;3 t=h^(d+p);3 u=i^p;3 s=n^p;e=u.b().f(2,'0')+s.b().f(2,'0')+d.b().f(2,'0')+p.b().f(2,'0')+t.b();l.k(\"E e: \"+e);c e}q D(1){o(v 1!=='r'){l.k(\"A B 1\");c}o(1.g===0||1.g<5){c}3 i=7(1.a(0,2));3 n=7(1.a(2,4));3 h=7(1.a(4,1.g));3 j=h^(i+n);3 d=i^j;3 m=n^j;e=d.b().f(2,'0')+m.b().f(2,'0')+j.b();l.k(\"D e: \"+e);c e}q P(1){o(v 1!=='r'){l.k(\"A B 1\");c}o(1.g===0||1.g<5){c}3 i=7(1.a(0,2));3 n=7(1.a(2,4));3 h=7(1.a(4,1.g));3 j=n^i;3 d=h^i;3 m=i^(j+d);e=j.b().f(2,'0')+d.b().f(2,'0')+m.b();c e}",
    60,
    60,
    "|str||let||||parseInt|||substring|toString|return|i6|result|padStart|length|i3||i5|log|console|i4|i2|if|i7|function|string|i10|i8|i9|typeof|getElementById|document|input|value|Invalid|argument|watchCheckCodeDecode|decodeWatchCheckCode|toolsCheckCodeEncode|gtc|try|catch|dtc|wc|tc|var|error|except|num|generateToolsCheckCode|some|has|leftInput2|generateRightCode|rightInput1|leftInput1|rightInput2|generateLeftCode".split(
      "|",
    ),
    0,
    {},
  ),
);
