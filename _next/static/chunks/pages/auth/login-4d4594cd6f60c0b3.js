(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [344], {
        36407: function (e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/auth/login", function () {
                return a(91455)
            }])
        },
        91455: function (e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function () {
                    return en
                }
            });
            var n = a(85893),
                r = a(23100),
                i = a(204),
                o = a(88911),
                s = a(12498),
                l = a(9740),
                c = a(96272),
                S = a(97822),
                d = a(33838),
                u = a(7754),
                h = a(91669),
                m = a(67294),
                p = a(33299),
                I = a(5771),
                f = a(12540);
            let _ = {
                    SIGN_IN: "SIGN_IN",
                    SIGN_UP: "SIGN_UP",
                    SUCCESS: "SUCCESS",
                    FORGOT_PASSWORD: "FORGOT_PASSWORD",
                    CONFIRM_PASSWORD: "CONFIRM_PASSWORD",
                    CONFIRM_SIGN_UP: "CONFIRM_SIGN_UP",
                    SUCCESS_PASSWORD_RESET: "SUCCESS_PASSWORD_RESET",
                    RESEND_CONFIRMATION_CODE: "RESEND_CONFIRMATION_CODE"
                },
                N = {
                    SIGN_IN: "Sign in to your account",
                    SIGN_UP: "Sign up with a new account",
                    SUCCESS: "Login successful!",
                    FORGOT_PASSWORD: "Enter your email below and we will send a message to reset your password",
                    CONFIRM_PASSWORD: "We have sent a password reset code by email to MASKED_EMAIL. Enter it below to reset your password",
                    SUCCESS_PASSWORD_RESET: "Your password has been reset. You can now sign in with your new password",
                    CONFIRM_SIGN_UP: "We have sent a code by email to MASKED_EMAIL. Enter it below to confirm your account"
                },
                x = {
                    INVALID_LOGIN: "Invalid username or password",
                    GENERAL_ERROR: "An error occurred. Please try again later"
                },
                C = {
                    SIGN_UP: "/api/auth/signup",
                    CONFIRM_SIGN_UP: "/api/auth/confirm-signup",
                    RESEND_CONFIRMATION_CODE: "/api/auth/resend-confirmation-code",
                    FORGOT_PASSWORD: "/api/auth/forgot-password",
                    CONFIRM_PASSWORD: "/api/auth/confirm-forgot-password",
                    COGNITO_LINK: "/api/auth/cognito-link",
                    APPLE_LINK: "/oauth2/authorize?identity_provider=SignInWithApple",
                    GOOGLE_LINK: "/oauth2/authorize?identity_provider=Google",
                    MICROSOFT_LINK: "/oauth2/authorize?identity_provider=Microsoft"
                },
                g = {
                    SIGN_IN: "Sign in",
                    SIGN_UP: "Sign up",
                    CHANGE_PASSWORD: "Change password",
                    RESET_PASSWORD: "Reset my password",
                    CONFIRM_ACCOUNT: "Confirm account"
                };
            var O = JSON.parse('[{"title":"Fluffy Rabbit","author":"Malakai030","filename":"Malakai030.webp"},{"title":"Edge of Nature","author":"Borisych","filename":"borisych.webp"},{"title":"The Persistence of Hope","author":"Jeremy","filename":"jeremyjf94.webp"},{"title":"Xianxia Hero Meditation","author":"Kentox","filename":"kentox.webp"},{"title":"Midas Glory","author":"Viniciusm","filename":"Viniciusm.webp"},{"title":"Breaking Free","author":"Malakai030","filename":"Malakai030_1.webp"},{"title":"Marble Galaxy","author":"Malakai030","filename":"Malakai030_2.webp"},{"title":"Reminder of Innocence","author":"Steven P","filename":"StevenP.webp"},{"title":"Close to deam, now awake and see.","author":"你大爺","filename":"你大爺.webp"},{"title":"Boundless Sky","author":"Siloa","filename":"Siloa.webp"},{"title":"Luminous Landscape","author":"Dee Does AI","filename":"DeeDoesAI.webp"},{"title":"Harvest Hill","author":"Azothane","filename":"azothane.webp"},{"title":"A Symphony of Boxes","author":"Kab1k","filename":"Kab1k.webp"},{"title":"Intricate Space World","author":"Dimo","filename":"Dimo.webp"},{"title":"Enchanted Drift","author":"Celestial","filename":"Celestial.webp"},{"title":"Out for a Walk","author":"JawKnee","filename":"JawKnee.webp"},{"title":"Journey to the Other Side","author":"Azarathag","filename":"Azarathag.webp"},{"title":"Veyron Velocity","author":"Leonardo","filename":"Bugatti.webp"},{"title":"Cybernetic Confrontation","author":"Leonardo","filename":"ExplosionFighting.webp"},{"title":"Mycelium Wanderer","author":"Leonardo","filename":"FemaleAdventurer1.webp"},{"title":"Fungal Fantasia","author":"Leonardo","filename":"FemaleAdventurer2.webp"},{"title":"Mycelium Dream","author":"Leonardo","filename":"FemaleAdventurer3.webp"},{"title":"Luminary Explorer","author":"Leonardo","filename":"FemaleAdventurer4.webp"},{"title":"Emerald Enigma","author":"Leonardo","filename":"FemaleAdventurer5.webp"},{"title":"The Pyroclastic Crusader","author":"Leonardo","filename":"GhostRider.webp"},{"title":"The Fragmented Minotaur","author":"Leonardo","filename":"GlitchMinotaur.webp"},{"title":"Bioluminescent Ballet","author":"Leonardo","filename":"Jellyfish.webp"},{"title":"Emerald Velocity","author":"Leonardo","filename":"MotorCycle.webp"},{"title":"Techno Wyvern","author":"Leonardo","filename":"RobotDragon.webp"},{"title":"The Vanguard of the Whispering Woods","author":"Leonardo","filename":"TreeMan.webp"},{"title":"Neo-Renaissance Man","author":"Leonardo","filename":"NeoRenaissanceMan.webp"},{"title":"Confectionery Dreamscape","author":"Leonardo","filename":"ConfectioneryDreamscape.webp"},{"title":"Broth of the Unknown","author":"Leonardo","filename":"BrothoftheUnknown.webp"},{"title":"CosmicOracle","author":"Leonardo","filename":"Cosmic Oracle.webp"},{"title":"Eclipsed Elysium","author":"Leonardo","filename":"EclipsedElysium.webp"},{"title":"Machined Seraphim","author":"Leonardo","filename":"MachinedSeraphim.webp"}]');

            function R(e, t) {
                if (t) {
                    let a = function (e) {
                        let [t, a] = e.split("@"), n = t[0] + "***", r = a.split(".")[0][0] + "***";
                        return n + "@" + r
                    }(t);
                    e = e.replace("MASKED_EMAIL", a)
                }
                return e
            }
            var w = a(842);
            let b = {
                    w: "95%",
                    fontWeight: 300,
                    px: "calc(".concat(w.cM, " * 1.125)"),
                    py: "calc(".concat(w.cM, " * 1.375)"),
                    bg: "#26272C",
                    rounded: "calc(".concat(w.cM, " * 0.5)")
                },
                E = {
                    variant: "noBorder",
                    py: "calc(".concat(w.cM, " * 0.375)"),
                    px: "calc(".concat(w.cM, " * 0.75)"),
                    bgColor: "#111111",
                    boxShadow: "0px calc(".concat(w.cM, " * 0.09375) calc(").concat(w.cM, " * 0.25) calc(").concat(w.cM, " * -0.0625) rgba(0,0,0,0.12)"),
                    fontSize: "calc(".concat(w.cM, " * 0.875)"),
                    size: "lg",
                    rounded: "calc(".concat(w.cM, " * 0.5)"),
                    outline: "none",
                    fontWeight: 300,
                    _placeholder: {
                        color: "#9094A6"
                    }
                },
                j = {
                    fontSize: "calc(".concat(w.cM, " * 0.875)"),
                    fontWeight: 300,
                    color: "#fff"
                },
                P = {
                    cursor: "pointer",
                    color: "#6B66FF",
                    fontWeight: 300,
                    _hover: {
                        color: "#807cff"
                    }
                };
            var D = a(44452),
                A = a(17655),
                G = a(49644),
                M = a(64952),
                y = e => {
                    let {
                        errorMessage: t
                    } = e;
                    return (0, n.jsx)(r.xu, {
                        border: "solid #d64958",
                        borderWidth: "px",
                        p: 2,
                        mb: 4,
                        rounded: "base",
                        maxW: {
                            base: "auto",
                            md: 80
                        },
                        children: (0, n.jsx)(o.x, {
                            fontSize: "xs",
                            fontWeight: 400,
                            lineHeight: 1.2,
                            color: "#d64958",
                            textAlign: "center",
                            children: t
                        })
                    })
                },
                F = e => {
                    let {
                        clearFormInputs: t,
                        changeFormState: a
                    } = e;
                    return (0, n.jsx)(o.x, {
                        fontSize: "xs",
                        onClick: () => {
                            t(), a(_.FORGOT_PASSWORD)
                        },
                        ...P,
                        children: "Forgot your password?"
                    })
                },
                W = a(70654),
                U = a(96177),
                k = a(28129),
                v = e => {
                    let {
                        setConfirmationCode: t
                    } = e;
                    return (0, n.jsxs)(W.NI, {
                        variant: "noRolloverStates",
                        id: "confirmation_code",
                        children: [(0, n.jsx)(U.l, {
                            ...j,
                            requiredIndicator: (0, n.jsx)(n.Fragment, {}),
                            children: "Verification Code"
                        }), (0, n.jsx)(k.I, {
                            type: "text",
                            name: "confirmation_code",
                            autoComplete: "off",
                            onChange: e => t(e.target.value),
                            ...E
                        })]
                    })
                },
                L = e => {
                    let {
                        inputEmail: t,
                        setInputEmail: a
                    } = e;
                    return (0, n.jsxs)(W.NI, {
                        variant: "noRolloverStates",
                        id: "email",
                        isRequired: !0,
                        children: [(0, n.jsx)(U.l, {
                            ...j,
                            requiredIndicator: (0, n.jsx)(n.Fragment, {}),
                            children: "Email"
                        }), (0, n.jsx)(k.I, {
                            type: "email",
                            name: "email",
                            placeholder: "name@host.com",
                            autoComplete: "username",
                            value: t,
                            onChange: e => a(e.target.value),
                            ...E
                        })]
                    })
                },
                T = e => {
                    let {
                        setInputPassword: t,
                        setConfirmPassword: a
                    } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(W.NI, {
                            variant: "noRolloverStates",
                            id: "passwordNew",
                            isRequired: !0,
                            children: [(0, n.jsx)(U.l, {
                                ...j,
                                requiredIndicator: (0, n.jsx)(n.Fragment, {}),
                                children: "New Password"
                            }), (0, n.jsx)(k.I, {
                                type: "password",
                                name: "password",
                                autoComplete: "new-password",
                                onChange: e => t(e.target.value),
                                ...E
                            })]
                        }), (0, n.jsxs)(W.NI, {
                            variant: "noRolloverStates",
                            isRequired: !0,
                            children: [(0, n.jsx)(U.l, {
                                ...j,
                                requiredIndicator: (0, n.jsx)(n.Fragment, {}),
                                children: "Enter New Password Again"
                            }), (0, n.jsx)(k.I, {
                                type: "password",
                                name: "confirm-password",
                                autoComplete: "new-password",
                                onChange: e => a(e.target.value),
                                ...E
                            })]
                        })]
                    })
                },
                z = e => {
                    let {
                        inputPassword: t,
                        setInputPassword: a
                    } = e;
                    return (0, n.jsxs)(W.NI, {
                        variant: "noRolloverStates",
                        id: "password",
                        isRequired: !0,
                        children: [(0, n.jsx)(U.l, {
                            ...j,
                            requiredIndicator: (0, n.jsx)(n.Fragment, {}),
                            children: "Password"
                        }), (0, n.jsx)(k.I, {
                            type: "password",
                            name: "password",
                            placeholder: "Password",
                            autoComplete: "current-password",
                            value: t,
                            onChange: e => a(e.target.value),
                            ...E
                        })]
                    })
                },
                H = a(88e3),
                K = a(5197),
                B = a(94442),
                Z = a(89975),
                V = e => {
                    let {
                        currentForm: t,
                        inputPassword: a,
                        passwordStatus: r
                    } = e;
                    return (0, n.jsx)(H.U, {
                        in: a.length > 0,
                        children: (0, n.jsxs)(K.aV, {
                            fontSize: "calc(".concat(w.cM, " * 0.625)"),
                            fontWeight: 400,
                            spacing: 1,
                            lineHeight: 1,
                            color: "#9094A6",
                            children: [(0, n.jsxs)(K.HC, {
                                color: r.lowerCase ? "#68D391" : "#d64958",
                                display: "flex",
                                alignItems: "center",
                                children: [(0, n.jsx)(K.DE, {
                                    as: r.lowerCase ? B.nQG : Z.Z
                                }), "Password must contain a lower case letter"]
                            }), (0, n.jsxs)(K.HC, {
                                color: r.upperCase ? "#68D391" : "#d64958",
                                display: "flex",
                                alignItems: "center",
                                children: [(0, n.jsx)(K.DE, {
                                    as: r.upperCase ? B.nQG : Z.Z
                                }), "Password must contain an upper case letter"]
                            }), (0, n.jsxs)(K.HC, {
                                color: r.containsNumber ? "#68D391" : "#d64958",
                                display: "flex",
                                alignItems: "center",
                                children: [(0, n.jsx)(K.DE, {
                                    as: r.containsNumber ? B.nQG : Z.Z
                                }), "Password must contain a number"]
                            }), (0, n.jsxs)(K.HC, {
                                color: r.length ? "#68D391" : "#d64958",
                                display: "flex",
                                alignItems: "center",
                                children: [(0, n.jsx)(K.DE, {
                                    as: r.length ? B.nQG : Z.Z
                                }), "Password must contain at least 8 characters"]
                            }), t === _.CONFIRM_PASSWORD && (0, n.jsxs)(K.HC, {
                                color: r.passwordsMatch ? "#68D391" : "#d64958",
                                display: "flex",
                                alignItems: "center",
                                children: [(0, n.jsx)(K.DE, {
                                    as: r.passwordsMatch ? B.nQG : Z.Z
                                }), "Passwords must match"]
                            }), (0, n.jsxs)(K.HC, {
                                color: r.noLeadingTrailingSpace ? "#68D391" : "#d64958",
                                display: "flex",
                                alignItems: "center",
                                children: [(0, n.jsx)(K.DE, {
                                    as: r.noLeadingTrailingSpace ? B.nQG : Z.Z
                                }), "Password must not contain a leading or trailing space"]
                            })]
                        })
                    })
                },
                q = e => {
                    let {
                        promptMessage: t
                    } = e;
                    return (0, n.jsx)(r.xu, {
                        border: "1px solid #68D391 ",
                        p: 2,
                        mb: 4,
                        rounded: "base",
                        maxW: {
                            base: "auto",
                            md: 80
                        },
                        children: (0, n.jsx)(o.x, {
                            fontSize: "xs",
                            fontWeight: 400,
                            lineHeight: 1.2,
                            color: "#68D391",
                            textAlign: "center",
                            children: t
                        })
                    })
                },
                J = e => {
                    let {
                        sendNewConfirmationCode: t
                    } = e;
                    return (0, n.jsxs)(o.x, {
                        mt: 2,
                        fontSize: "sm",
                        fontWeight: 300,
                        textAlign: "center",
                        lineHeight: 1,
                        children: ["Didn't receive a code?", " ", (0, n.jsx)(d.r, {
                            type: "submit",
                            onClick: () => {
                                t()
                            },
                            ...P,
                            children: "Send a new code"
                        })]
                    })
                },
                Q = e => {
                    let {
                        currentForm: t,
                        changeFormState: a
                    } = e;
                    return null
                },
                X = a(16661),
                Y = a(50560);
            let $ = function () {
                    let e = Math.floor(Math.random() * O.length);
                    return O[e]
                }(),
                ee = () => (0, n.jsx)(i.k, {
                    bgImage: "url(/img/login-hero-images/MachinedSeraphim.webp",//.concat($.filename, ")"),
                    bgPos: "center",
                    bgSize: "cover",
                    bgRepeat: "no-repeat",
                    w: "full",
                    alignItems: "flex-end",
                    display: {
                        base: "none",
                        md: "inline-flex"
                    },
                    justifyContent: {
                        base: "center",
                        lg: "flex-end"
                    },
                    flexGrow: {
                        base: 1,
                        lg: "unset"
                    },
                    children: (0, n.jsxs)(r.xu, {
                        borderRadius: 48,
                        bg: "rgba(0, 0, 0, 0.34)",
                        backdropFilter: "blur(14)",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        px: 4,
                        py: 3.5,
                        gap: 6,
                        fontSize: {
                            base: "xs",
                            lg: "sm"
                        },
                        fontWeight: "400",
                        display: "inline-block ",
                        mx: 7.5,
                        mb: 7.5,
                        textAlign: "center",
                        children: ["‘".concat($.title, "’ by"), " ", (0, n.jsxs)(o.x, {
                            variant: "gradient",
                            as: "span",
                            children: ["@", "".concat($.author)]
                        })]
                    })
                }),
                et = () => {
                    let e = (0, s.ff)("#584d3e", "#A7B2C1"),
                        [t, a] = (0, m.useState)(!1),
                        [O, E] = (0, m.useState)(!1),
                        [j, W] = (0, m.useState)(!1),
                        [U, k] = (0, m.useState)(!1),
                        [H, K] = (0, m.useState)(""),
                        [Z, $] = (0, m.useState)(""),
                        [ee, et] = (0, m.useState)(""),
                        [ea, en] = (0, m.useState)(""),
                        [er, ei] = (0, m.useState)(_.SIGN_IN),
                        [eo, es] = (0, m.useState)(""),
                        [el, ec] = (0, m.useState)(""),
                        [eS, ed] = (0, m.useState)({
                            lowerCase: !1,
                            upperCase: !1,
                            containsNumber: !1,
                            length: !1,
                            noLeadingTrailingSpace: !1,
                            passwordsMatch: !1
                        });
                    (0, m.useEffect)(() => {
                        let e = /[a-z]/.test(Z),
                            t = /[A-Z]/.test(Z),
                            a = /\d/.test(Z),
                            n = Z.length >= 8,
                            r = !/^\s|\s$/.test(Z),
                            i = er !== _.CONFIRM_PASSWORD || "" !== ee && Z === ee;
                        ed({
                            lowerCase: e,
                            upperCase: t,
                            containsNumber: a,
                            length: n,
                            noLeadingTrailingSpace: r,
                            passwordsMatch: i
                        })
                    }, [Z, ee, er]);
                    let eu = () => {
                            es(""), ec("")
                        },
                        eh = () => {
                            K(""), $(""), et(""), en("")
                        },
                        em = e => {
                            switch (eu(), e) {
                                case _.SIGN_IN:
                                    //es(R(N.SIGN_IN)), eh();
                                    es(R(N.SUCCESS));
                                    break;
                                case _.SIGN_UP:
                                    es(R(N.SIGN_UP)), eh();
                                    break;
                                case _.SUCCESS:
                                    es(R(N.SUCCESS));
                                    break;
                                case _.FORGOT_PASSWORD:
                                    es(R(N.FORGOT_PASSWORD));
                                    break;
                                case _.CONFIRM_PASSWORD:
                                case _.CONFIRM_SIGN_UP:
                                    es(R(N[e], H));
                                    break;
                                case _.SUCCESS_PASSWORD_RESET:
                                    es(R(N.SUCCESS_PASSWORD_RESET));
                                    break;
                                default:
                                    console.error("Unknown formState: ".concat(e))
                            }
                            ei(e)
                        },
                        ep = () => {
                            em(_.SIGN_IN), a(!1)
                        },
                        eI = async () => {
                            let e = H.trim(),
                                t = Z.trim(),
                                n = await (0, p.signIn)("credentials", {
                                    username: e,
                                    password: t,
                                    redirect: !1
                                });
                            void 0 !== n && n.error ? (eu(), a(!1), 401 === n.status ? ec(x.INVALID_LOGIN) : n.error === I.GT ? em(_.CONFIRM_SIGN_UP) : ec(n.error)) : (em(_.SUCCESS), window.location.href = "/")
                        };
                    async function ef(e, t) {
                        let a = await e.json();
                        200 === e.status ? (eu(), em(t)) : ec(a.message || x.GENERAL_ERROR)
                    }
                    let e_ = async () => {
                        eu();
                        let e = H.trim(),
                            t = Z.trim(),
                            n = ea.trim();
                        if (a(!0), er === _.SIGN_IN || er === _.SUCCESS_PASSWORD_RESET) eI();
                        else {
                            let r, i, o;
                            switch (er) {
                                case _.RESEND_CONFIRMATION_CODE:
                                    r = C.RESEND_CONFIRMATION_CODE, i = _.CONFIRM_SIGN_UP, o = {
                                        email: e
                                    };
                                    break;
                                case _.FORGOT_PASSWORD:
                                    r = C.FORGOT_PASSWORD, i = _.CONFIRM_PASSWORD, o = {
                                        email: e
                                    };
                                    break;
                                case _.CONFIRM_PASSWORD:
                                    r = C.CONFIRM_PASSWORD, i = _.SUCCESS_PASSWORD_RESET, o = {
                                        email: e,
                                        password: t,
                                        confirmation_code: n
                                    };
                                    break;
                                case _.SIGN_UP:
                                    r = C.SIGN_UP, i = _.CONFIRM_SIGN_UP, o = {
                                        email: e,
                                        password: t
                                    };
                                    break;
                                case _.CONFIRM_SIGN_UP:
                                    r = C.CONFIRM_SIGN_UP, i = _.SUCCESS, o = {
                                        email: e,
                                        password: t,
                                        confirmation_code: n
                                    }, eI();
                                    break;
                                default:
                                    console.error("Unknown formState: ".concat(er))
                            }
                            if (r && i) {
                                let e = await fetch(r, {
                                    method: "post",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(o)
                                });
                                await ef(e, i)
                            }
                            a(!1)
                        }
                    }, eN = async e => {
                        e === C.GOOGLE_LINK ? W(!0) : e === C.MICROSOFT_LINK ? k(!0) : e === C.APPLE_LINK && E(!0);
                        let t = await fetch(C.COGNITO_LINK, {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                url: e
                            })
                        });
                        if (200 === t.status) {
                            let e = await t.json();
                            window.location.href = e.url
                        } else W(!1), k(!1), await ef(t, _.SIGN_IN)
                    }, ex = async () => {
                        a(!0);
                        let e = await fetch(C.RESEND_CONFIRMATION_CODE, {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: H
                            })
                        });
                        er === _.CONFIRM_PASSWORD ? await ef(e, _.CONFIRM_PASSWORD) : er === _.CONFIRM_SIGN_UP && await ef(e, _.CONFIRM_SIGN_UP), a(!1)
                    };
                    return (0, n.jsxs)(i.k, {
                        minW: {
                            base: "100%",
                            md: "calc(".concat(w.cM, " * 26.25)")
                        },
                        flexDir: "column",
                        px: {
                            base: 3,
                            md: 14
                        },
                        py: 6,
                        gap: 3.5,
                        h: {
                            base: "fit-content",
                            md: "auto"
                        },
                        bg: "#171717",
                        overflow: "auto",
                        children: [(0, n.jsx)(i.k, {
                            alignItems: "center",
                            flexDir: "column",
                            children: (0, n.jsx)(l.E, {
                                w: 20,
                                src: f.r0,
                                alt: "Leonardo.Ai"
                            })
                        }), (0, n.jsxs)(i.k, {
                            flexDir: "column",
                            alignItems: "center",
                            gap: 3,
                            children: [(0, n.jsxs)(i.k, {
                                flexDir: "column",
                                alignItems: "flex-start",
                                w: "full",
                                gap: 4,
                                children: [(0, n.jsx)(r.xu, {
                                    w: "full",
                                    pos: "relative",
                                    children: (0, n.jsxs)("form", {
                                        onSubmit: e => {
                                            e.preventDefault(), e_()
                                        },
                                        children: [eo && (0, n.jsx)(q, {
                                            promptMessage: R(eo)
                                        }), el && (0, n.jsx)(y, {
                                            errorMessage: el
                                        }), er !== _.SUCCESS && (0, n.jsxs)(i.k, {
                                            flexDir: "column",
                                            w: "full",
                                            alignItems: "flex-start",
                                            gap: 3,
                                            pb: 1.5,
                                            children: [
                                                [_.SIGN_IN, _.SIGN_UP, _.SUCCESS, _.FORGOT_PASSWORD, _.SUCCESS_PASSWORD_RESET].includes(er) && (0, n.jsx)(L, {
                                                    inputEmail: H,
                                                    setInputEmail: K
                                                }), [_.SIGN_IN, _.SIGN_UP, _.SUCCESS, _.SUCCESS_PASSWORD_RESET].includes(er) && (0, n.jsx)(z, {
                                                    inputPassword: Z,
                                                    setInputPassword: $
                                                }), [_.SIGN_IN, _.SUCCESS_PASSWORD_RESET].includes(er) && (0, n.jsx)(F, {
                                                    clearFormInputs: eh,
                                                    changeFormState: em
                                                }), [_.CONFIRM_PASSWORD, _.CONFIRM_SIGN_UP, _.RESEND_CONFIRMATION_CODE].includes(er) && (0, n.jsx)(v, {
                                                    setConfirmationCode: en
                                                }), er === _.CONFIRM_PASSWORD && (0, n.jsx)(T, {
                                                    setInputPassword: $,
                                                    setConfirmPassword: et
                                                }), (er === _.SIGN_UP || er === _.CONFIRM_PASSWORD) && (0, n.jsx)(V, {
                                                    currentForm: er,
                                                    inputPassword: Z,
                                                    passwordStatus: eS
                                                }), (0, n.jsx)(c.z, {
                                                    type: "submit",
                                                    mt: 2,
                                                    variant: "gradient",
                                                    py: 6,
                                                    w: "95%",
                                                    rounded: "lg",
                                                    onClick: e_,
                                                    isLoading: t,
                                                    isDisabled: er === _.CONFIRM_PASSWORD ? Z !== ee || "" === Z || "" === ee || "" === ea : er === _.CONFIRM_SIGN_UP ? "" === ea : er !== _.SIGN_IN && (er === _.FORGOT_PASSWORD ? "" === H : (er === _.SIGN_UP || er === _.CONFIRM_PASSWORD) && !Object.values(eS).every(e => !0 === e)),
                                                    alignSelf: "center",
                                                    children: (() => {
                                                        switch (er) {
                                                            case _.SIGN_IN:
                                                                return g.SIGN_IN;
                                                            case _.SIGN_UP:
                                                                return g.SIGN_UP;
                                                            case _.FORGOT_PASSWORD:
                                                                return g.RESET_PASSWORD;
                                                            case _.CONFIRM_PASSWORD:
                                                                return g.CHANGE_PASSWORD;
                                                            case _.CONFIRM_SIGN_UP:
                                                            case _.RESEND_CONFIRMATION_CODE:
                                                                return g.CONFIRM_ACCOUNT;
                                                            case _.SUCCESS_PASSWORD_RESET:
                                                                return g.SIGN_IN;
                                                            default:
                                                                return ""
                                                        }
                                                    })()
                                                })
                                            ]
                                        }), [_.CONFIRM_SIGN_UP, _.RESEND_CONFIRMATION_CODE].includes(er) && (0, n.jsx)(J, {
                                            sendNewConfirmationCode: ex
                                        }), er === _.FORGOT_PASSWORD && (0, n.jsx)(o.x, {
                                            fontSize: "sm",
                                            fontWeight: 300,
                                            textAlign: "center",
                                            children: (0, n.jsx)(d.r, {
                                                onClick: () => ep(),
                                                ...P,
                                                children: "Cancel"
                                            })
                                        })]
                                    })
                                }), [_.SIGN_IN, _.SIGN_UP].includes(er) && (0, n.jsx)(Q, {
                                    currentForm: er,
                                    changeFormState: em
                                }), (0, n.jsx)(u.M, {
                                    width: "100%",
                                    mt: 10,
                                    children: (0, n.jsxs)(h.g, {
                                        gap: 3,
                                        children: [(0, n.jsx)(o.x, {
                                            size: "sm",
                                            children: "Available now on iOS"
                                        }), (0, n.jsx)(d.r, {
                                            "data-tracking-id": Y.trackingElements.downloadIOSApp.id,
                                            href: X.n.apple,
                                            style: {
                                                cursor: "pointer"
                                            },
                                            target: "_blank",
                                            children: (0, n.jsx)(B.$eu, {})
                                        })]
                                    })
                                })]
                            })]
                        }), er === _.SUCCESS && (0, n.jsx)(i.k, {
                            w: "full",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDir: "row",
                            mb: 4,
                            gap: 2,
                            children: (0, n.jsx)(M.Z, {})
                        })]
                    })
                };
            var ea = () => (0, n.jsxs)(r.xu, {
                    bgColor: "#000",
                    children: [(0, n.jsx)(r.xu, {
                        pos: "absolute",
                        w: "full",
                        h: "100%",
                        minH: "100vh",
                        opacity: "0.24",
                        bgImage: "/img/login-hero-images/MachinedSeraphim.webp",//.concat($.filename, ")"),
                        bgPos: "center",
                        bgSize: "cover",
                        bgRepeat: "no-repeat",
                        filter: "blur(1.5)"
                    }), (0, n.jsx)(i.k, {
                        pos: "relative",
                        px: {
                            base: 4,
                            sm: 14,
                            md: 20
                        },
                        py: {
                            base: 4,
                            sm: 14,
                            md: 20
                        },
                        minH: {
                            base: "100%",
                            md: "100vh"
                        },
                        children: (0, n.jsxs)(i.k, {
                            w: "100%",
                            flexDir: "row",
                            borderRadius: 12,
                            overflow: "hidden",
                            children: [(0, n.jsx)(et, {}), (0, n.jsx)(ee, {})]
                        })
                    })]
                }),
                en = () => (0, n.jsx)(ea, {})
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], function () {
            return e(e.s = 36407)
        }), _N_E = e.O()
    }
]);