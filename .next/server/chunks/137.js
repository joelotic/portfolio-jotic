"use strict";
exports.id = 137;
exports.ids = [137];
exports.modules = {

/***/ 4644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6333);



const About = ()=>{
    function handleDownload() {
        // Replace 'file_url' with the actual URL of your CV file
        const fileUrl = "img/fullscreendark.jpg";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "fullscreendark-cv.jpg"; // Specify the filename for the downloaded file
        // Simulate a click on the link to trigger the download
        link.click();
    }
    const { nav  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "about",
        className: `${nav === "about" ? "active" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container page-title text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "text-center",
                        children: [
                            "about ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "me"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "title-head-subtitle",
                        children: "I design and code using several tools, to follow."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container infos",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row personal-info",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-6 col-lg-6 col-md-12 col-sm-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image-container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "img-fluid d-block",
                                        src: "img/dark-about.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "d-block d-md-none",
                                    children: [
                                        `I'm`,
                                        " a fullstack software engineer based in Singapore, I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row col-xl-6 col-lg-6 col-md-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "list-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "First Name"
                                                        }),
                                                        "Joel"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Last Name"
                                                        }),
                                                        "Otic"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "BirthYear"
                                                        }),
                                                        "1981"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Nationality"
                                                        }),
                                                        "Filipino"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Experience"
                                                        }),
                                                        "20 years"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Address"
                                                        }),
                                                        "Singapore"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "list-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Employed"
                                                        }),
                                                        "Yes"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Languages"
                                                        }),
                                                        "English"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Phone"
                                                        }),
                                                        "+65 81117077"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Email"
                                                        }),
                                                        "joelotic@gmail.com"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Github"
                                                        }),
                                                        "joelotic"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Others"
                                                        }),
                                                        "tofollow"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 resume-btn-container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "btn btn-resume",
                                        onClick: handleDownload,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-download"
                                                }),
                                                "download my cv"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container col-12 mx-auto text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "about-section"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "resume-container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "font-weight-600 uppercase title-section",
                                            children: "experience"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "resume-items",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "2012 - Current (11 years)"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "software engineer",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "I-magination Solution PTE LTD"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "card-body",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: "System Integrator/Vendor with a vast projects in Singapore Government"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "2004 - 2012 (8 years)"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "Production Support Supervisor/software engineer",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "Eastern Telecommunications"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "card-body",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: "Telecommunications industry"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "2002 - 2002 (2 years)"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "software engineer",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "Digiline INC."
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "card-body",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: "PHP and Java programming for School ID System"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6 skills-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "font-weight-600 uppercase title-section",
                                            children: "Education"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "resume-items",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "bullet"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "card",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "card-header",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "year",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fa fa-calendar"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fa fa-caret-right"
                                                                            }),
                                                                            "1998 - 2002"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "d-block font-weight-400 uppercase",
                                                                        children: [
                                                                            "Computer Science Degree",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "separator"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "font-weight-700",
                                                                                children: "Adamson University"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "card-body",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy."
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "font-weight-600 uppercase title-section skills-title",
                                        children: "skills"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "Java and Spring Frameworks"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 80,
                                                    style: {
                                                        width: "80%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(20% - 21px)"
                                                    },
                                                    children: [
                                                        "80%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: ".NET Core"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 60,
                                                    style: {
                                                        width: "60%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(40% - 21px)"
                                                    },
                                                    children: [
                                                        "60%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "Oracle,ms sql,postgre,mariadb"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 90,
                                                    style: {
                                                        width: "90%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(10% - 21px)"
                                                    },
                                                    children: [
                                                        "90%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "react/Next js"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 65,
                                                    style: {
                                                        width: "65%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(35% - 21px)"
                                                    },
                                                    children: [
                                                        "65%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "Apache Spark, pig, hive"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 90,
                                                    style: {
                                                        width: "90%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(10% - 21px)"
                                                    },
                                                    children: [
                                                        "90%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "aws,gcp"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 85,
                                                    style: {
                                                        width: "85%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(15% - 21px)"
                                                    },
                                                    children: [
                                                        "85%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "angular"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 60,
                                                    style: {
                                                        width: "60%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(40% - 21px)"
                                                    },
                                                    children: [
                                                        "60%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "Hadoop"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 75,
                                                    style: {
                                                        width: "75%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(25% - 21px)"
                                                    },
                                                    children: [
                                                        "75%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "photoshop"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 80,
                                                    style: {
                                                        width: "80%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(20% - 21px)"
                                                    },
                                                    children: [
                                                        "80%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 2506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Certification)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/navContext.js
var navContext = __webpack_require__(6333);
;// CONCATENATED MODULE: ./src/components/CertificationPopup.js

const CertificationPopup = ({ open , close , data  })=>{
    console.log("CertificationPopup" + data);
    function handleDownload() {
        // Replace 'file_url' with the actual URL of your CV file
        const fileUrl = data.img;
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileUrl.split(/(\\|\/)/g).pop(); // Specify the filename for the downloaded file
        // Simulate a click on the link to trigger the download
        link.click();
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "modal__container",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `istambul_tm_modalbox ${open ? "opened" : ""}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "box_inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "close",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            onClick: ()=>close(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa fa-times"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "description_wrap",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "news_popup_details",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top_image",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "img/4-2.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main",
                                            "data-img-url": data && data.img,
                                            style: {
                                                backgroundImage: `url(${data && data.img})`
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "news_main_title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: data && data.title ? data.title : "title"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: data && data.tag
                                                }),
                                                "\xa0 \xa0 \xa0",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: handleDownload,
                                                    className: "btn readmore",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "  download"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    children: data && data.des && data.des.map((des, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: des
                                        }, i))
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_CertificationPopup = (CertificationPopup);

;// CONCATENATED MODULE: ./src/components/Certification.js




{}const data1 = [
    {
        title: "PCAP\u2122 \u2013 Certified Associate in Python Programming",
        img: "certificate/bigdata/python-certificate.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "PCAP\u2122 \u2013 Certified Associate in Python Programming certification (Exam PCAP-31-0x) is a professional, high-stakes credential that measures the candidate's ability to perform intermediate-level coding tasks in the Python language, including the ability to design, develop, debug, execute, and refactor multi-module Python programs, as well as measures their skills and knowledge related to analyzing and modeling real-life problems in OOP categories with the use of the fundamental notions and techniques available in the object-oriented approach.",
            "The PCAP\u2122 certification shows that the individual is familiar with the following concepts: modules, packages, and PIP, character encoding, strings and string processing, generators, iterators, closures, files, file streams, and file processing, exception hierarchies, and exception classes and objects, working with selected Standard Library modules, and the fundamentals of the Object-Oriented Programming (OOP) approach.",
            "Becoming PCAP\u2122 certified ensures that the individual is fully acquainted with all the primary means provided by Python 3 to enable them to start their own studies at an advanced level, and to open a path to the developer\u2019s career.", 
        ]
    },
    {
        title: "Apache spark - python certificate",
        img: "certificate/bigdata/apache-spark-python-certificate.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "The Databricks Certified Associate Developer for Apache Spark certification exam assesses the understanding of the Spark DataFrame API and the ability to apply the Spark DataFrame API to complete basic data manipulation tasks within a Spark session.",
            "These tasks include selecting, renaming and manipulating columns; filtering, dropping, sorting, and aggregating rows; handling missing data; combining, reading, writing and partitioning DataFrames with schemas; and working with UDFs and Spark SQL functions. In addition, the exam will assess the basics of the Spark architecture like execution/deployment modes, the execution hierarchy, fault tolerance, garbage collection, and broadcasting.",
            "Individuals who pass this certification exam can be expected to complete basic Spark DataFrame tasks using Python or Scala.", 
        ]
    },
    {
        title: "Microsoft\xae Power bi data analyst",
        img: "certificate/bigdata/microsoft-power-Bi-data-analyst.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "Candidates for this certification deliver actionable insights by working with available data and applying domain expertise. They provide meaningful business value through easy-to-comprehend data visualizations, enable others to perform self-service analytics, and deploy and configure solutions for consumption.",
            "The Power BI data analyst works closely with business stakeholders to identify business requirements. They collaborate with enterprise data analysts and data engineers to identify and acquire data. They also transform the data, create data models, visualize data, and share assets by using Power BI.",
            "Candidates for this certification should be proficient at using Power Query and writing expressions by using Data Analysis Expressions (DAX). These professionals know how to assess data quality. Plus, they understand data security, including row-level security and data sensitivity.", 
        ]
    }, 
];
{}const data2 = [
    {
        title: "AWS Certified cloud practitioner",
        img: "certificate/cloud/AWS-certified-cloud-practitioner-certificate.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "AWS Cloud Quest: Cloud Practitioner",
            "AWS Cloud Quest is the first and only role-playing game to help you build in-demand AWS Cloud skills. Adventure awaits as you zap drones, befriend pets, and solve puzzles. Collect gems and earn points as you progress in building real solutions inside a live AWS environment. Prepare for the AWS Certified Cloud Practitioner exam with one of the most engaging cloud trainings you\u2019ve ever taken.", 
        ]
    },
    {
        title: "AWS Certified Solutions Architect - Associate certificate",
        img: "certificate/cloud/AWS-certified-solutions-architect-certificate.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "AWS Certified Solutions Architect - Associate showcases knowledge and skills in AWS technology, across a wide range of AWS services",
            "The focus of this certification is on the design of cost and performance optimized solutions, demonstrating a strong understanding of the AWS Well-Architected Framework. This certification can enhance the career profile and earnings of certified individuals and increase your credibility and confidence in stakeholder and customer interactions.", 
        ]
    },
    {
        title: "AWS Certified devops engineer certificate",
        img: "certificate/cloud/AWS-certified-devops-engineer-certificate.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "The AWS Certified DevOps Engineer - Professional showcases individuals\u2019 technical expertise in provisioning, operating, and managing distributed application systems on the AWS platform, giving them increased confidence and credibility with peers, stakeholders, and customers. Organizations with these qualified professionals can ensure speedy delivery of secure, compliant, systems that are highly available and scalable.",
            "The AWS Certified DevOps Engineer - Professional (DOP-C02) exam is intended for individuals who perform a DevOps engineer role. The exam validates a candidate\u2019s technical expertise in provisioning, operating, and managing distributed systems and services on AWS..", 
        ]
    },
    {
        title: "AWS Certified developer certificate",
        img: "certificate/cloud/AWS-certified-developer-certificate.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "AWS Certified Developer - Associate showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS.",
            "Preparing for and attaining this certification gives certified individuals more confidence and credibility. Organizations with AWS Certified developers have the assurance of having the right talent to give them a competitive advantage and ensure stakeholder and customer satisfaction.", 
        ]
    }, 
];
{}const data3 = [
    {
        title: "Oracle Advanced PLSQL Developer Certified Professional",
        img: "certificate/database/oracle-advanced-PLSQ-developer-certified-professional.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "Oracle offers a complete, integrated set of application development tools that support any development approach, technology platform, or operating system.",
            "Oracle Advanced PL/SQL Developer Certified Professionals demonstrate expertise in with database-centric Internet applications for Oracle Database 10g, 11g and 12c.", 
        ]
    },
    {
        title: "Oracle Advanced PLSQL Developer Certified Associate",
        img: "certificate/database/oracle-advanced-PLSQ-developer-certified-associate.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "An Oracle Database PL/ SQL certification is a highly regarded certification and gives you skills that are very high in demand. Becoming an Oracle Database PL/ SQL certified associate means you are ready and well-equipped to use even the most advanced features of this programming language and undertake any database project.",
            "An Oracle PL/ SQL Developer knows how to use this procedural language and all its highly-advanced features, from performance to application code architecture. This certification equips you to provide guidance to your organisation at a more strategic level, which makes you an invaluable asset.", 
        ]
    },
    {
        title: "Oracle Database SQL Certified Expert",
        img: "certificate/database/oracle-database-SQL-certified-expert.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "Demonstrate Oracle DB PL SQL Programming",
            "Oracle SQL is a programming language that allows database users and administrators to perform database tasks and undertake projects in fewer clicks and keystrokes. It is a graphical user interface that was designed with the objective of helping the user save time used during operations and maximise the return on investment (ROI) in the Oracle Database technology stack. It runs on any operating system that supports Java and supports Oracle Database 10g, 11g and 12g.", 
        ]
    },
    {
        title: "Microsoft\xae MSSQL2008 Database developer",
        img: "certificate/database/MSSQL2008-database-developer.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "Writing Queries Using Microsoft SQL Server 2008 Transact-SQL", 
        ]
    },
    {
        title: "Microsoft\xae MSSQL2008 Database administrator",
        img: "certificate/database/MSSQL2008-database-administrator.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "PRO: Designing, Optimizing and Maintaining a Database Server Infrastructure using Microsoft SQL Server 2008", 
        ]
    },
    {
        title: "Microsoft\xae Certified Technology Specialist: SQL Server 2008, Implementation and Maintenance",
        img: "certificate/database/MSSQL2008-technology-specialist.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "Microsoft SQL Server continues to grow its market share as the foundation of Microsoft\u2019s push to integrate Business Intelligence (BI) within enterprise environments. Passing the Microsoft SQL Server 2008 Implementation and Maintenance exam will validate your ability to support this growing market segment. Upon successful completion of this exam, candidates receive Microsoft Certified Technology Specialist (MCTS) certification for SQL Server 2008, Implementation and Maintenance. If this is your first professional Microsoft certification, you will also gain Microsoft Certified Professional (MCP) status. Microsoft Certified Technology Specialist for SQL Server 2008, Implementation and Maintenance is the only prerequisite for Microsoft\u2019s Certified IT Professional (MCITP) Database Administrator 2008 certification. This two-exam track is one of the shortest to Microsoft\u2019s new Certified IT Professional status. The alternative SQL MCITP tracks are Database Developer 2008 and Business Intelligence Developer 2008. There are no overlapping exams between these three tracks.", 
        ]
    }, 
];
{}const data4 = [
    {
        title: "Oracle Certified Associate- Java SE 8 Programmer Certificate",
        img: "certificate/java/java-se8-programmer.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "The Java SE 8 Oracle Certified Associate (OCA) certification helps you build a foundational understanding of Java, and gaining this certification credential is the first of two steps in demonstrating you have the high-level skills needed to become a professional Java developer.", 
        ]
    },
    {
        title: "Spring professional v5 certificate",
        img: "certificate/java/springv5-framework.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "This brand-new generation of the framework is ready for 2018 and beyond: with support for JDK 9 and the Java EE 8 API level (e.g. Servlet 4.0), as well as comprehensive integration with Reactor 3.1, JUnit 5, and the Kotlin language. On top of that all, Spring Framework 5 comes with many functional API variants and introduces a dedicated reactive web framework called Spring WebFlux, next to a revised version of our Servlet-based web framework Spring MVC",
            "Upgrading to Version 5.3Third-Party APIs and Libraries",
            "For Kotlin:Kotlin support has been upgraded to Kotlin 1.4 and is still compatible with Kotlin 1.3+ Kotlin Coroutines 1.4 (which builds on Kotlin 1.4) or above is now required for coroutines support.For Kotlin scripting, Kotlin 1.4 users should declare the kotlin-scripting-jsr223 dependency instead of kotlin-scripting-jsr223-embeddable.", 
        ]
    }, 
];
{}const data5 = [
    {
        title: "Microsoft\xae Certified Professional Developer: Windows Developer 4",
        img: "certificate/microsoft/microsoft-certified-web-developer.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        title: "Microsoft\xae Certified Professional Developer: Web Developer 4",
        img: "certificate/microsoft/microsoft-certified-windows-developer.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    }, 
];
{}const data6 = [
    {
        title: "scrum master",
        img: "certificate/scrum/scrum-master.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "Certified Agile Scrum Master (CASM)\xae certified individuals have the knowledge and understanding of the Scrum Framework required to allow them to successfully fill the Scrum Master role in Scrum teams along with Agile Knowledge.",
            "The role of the Certified Agile Scrum Master (CASM)\xae in a software company is changing. No longer is it about driving people to achieve results. Now it is about enabling teams to be hyper-productive. But how can this be accomplished? Scrum, an agile framework, has been used successfully to build hyper-productive teams. What is Scrum? How can a manager build hyper-productive teams that outpace everyone else? In this talk you will hear exactly what Scrum is, its base components, and the traits required to help ensure success.", 
        ]
    }, 
];
{}const data7 = [
    {
        title: "outsystems developer",
        img: "certificate/outsystems/outsystems-developer.jpg",
        tag: "Accreditation",
        date: {
            date: "23",
            month: "jun",
            year: "2021"
        },
        des: [
            "The Associate Reactive Developer exam focuses on the fundamentals of OutSystems reactive web and mobile application development. Targeted for developers who are new to OutSystems and develop simple reactive web and mobile applications. This is one of the first steps to kickstart your OutSystems journey as a certified developer.", 
        ]
    }, 
];
const Certification = ()=>{
    const { nav  } = (0,external_react_.useContext)(navContext/* default */.Z);
    const { 0: modal , 1: setModal  } = (0,external_react_.useState)(false);
    const { 0: activeData , 1: setActiveData  } = (0,external_react_.useState)({});
    const onClick = (value)=>{
        setModal(true);
        setActiveData(value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_CertificationPopup, {
                open: modal,
                close: ()=>setModal(false),
                data: activeData
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                id: "certification",
                className: `${nav === "certification" ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container page-title text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "text-center",
                            children: [
                                "it ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "certifications"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-9 col-lg-9 col-md-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-weight-600 uppercase title-section",
                            children: "big data/analytics"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                data1.map((data1, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                                    className: "blog-figure",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data1, i),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "img-fluid",
                                                                src: data1.img,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "post-date",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data1.date.date
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data1.date.month
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: ()=>onClick(data1, i),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: data1.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "blog-excerpt",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                data1.des[0].substring(0, 92),
                                                                "... "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data1, i),
                                                            className: "btn readmore",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Read more"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i)),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-9 col-lg-9 col-md-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-weight-600 uppercase title-section",
                            children: "cloud"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                data2.map((data2, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                                    className: "blog-figure",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data2, i),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "img-fluid",
                                                                src: data2.img,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "post-date",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data2.date.date
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data2.date.month
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: ()=>onClick(data2, i),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: data2.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "blog-excerpt",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                data2.des[0].substring(0, 92),
                                                                "... "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data2, i),
                                                            className: "btn readmore",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Read more"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i)),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-9 col-lg-9 col-md-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-weight-600 uppercase title-section",
                            children: "database"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                data3.map((data3, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                                    className: "blog-figure",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data3, i),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "img-fluid",
                                                                src: data3.img,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "post-date",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data3.date.date
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data3.date.month
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: ()=>onClick(data3, i),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: data3.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "blog-excerpt",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                data3.des[0].substring(0, 92),
                                                                "... "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data3, i),
                                                            className: "btn readmore",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Read more"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i)),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-9 col-lg-9 col-md-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-weight-600 uppercase title-section",
                            children: "java programming"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                data4.map((data4, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                                    className: "blog-figure",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data4, i),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "img-fluid",
                                                                src: data4.img,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "post-date",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data4.date.date
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data4.date.month
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: ()=>onClick(data4, i),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: data4.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "blog-excerpt",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                data4.des[0].substring(0, 92),
                                                                "... "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data4, i),
                                                            className: "btn readmore",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Read more"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i)),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-9 col-lg-9 col-md-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-weight-600 uppercase title-section",
                            children: "microsoft programming"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                data5.map((data5, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                                    className: "blog-figure",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data5, i),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "img-fluid",
                                                                src: data5.img,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "post-date",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data5.date.date
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data5.date.month
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: ()=>onClick(data5, i),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: data5.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "blog-excerpt",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                data5.des[0].substring(0, 92),
                                                                "... "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data5, i),
                                                            className: "btn readmore",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Read more"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i)),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-9 col-lg-9 col-md-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-weight-600 uppercase title-section",
                            children: "agile scrum"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                data6.map((data6, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                                    className: "blog-figure",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data6, i),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "img-fluid",
                                                                src: data6.img,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "post-date",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data6.date.date
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data6.date.month
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: ()=>onClick(data6, i),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: data6.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "blog-excerpt",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                data6.des[0].substring(0, 92),
                                                                "... "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data6, i),
                                                            className: "btn readmore",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Read more"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i)),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-9 col-lg-9 col-md-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-weight-600 uppercase title-section",
                            children: "outsystems"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                data7.map((data7, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                                    className: "blog-figure",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data7, i),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "img-fluid",
                                                                src: data7.img,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "post-date",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data7.date.date
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: data7.date.month
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: ()=>onClick(data7, i),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: data7.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "blog-excerpt",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                data7.des[0].substring(0, 92),
                                                                "... "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>onClick(data7, i),
                                                            className: "btn readmore",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Read more"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i)),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Certification = (Certification);


/***/ }),

/***/ 8504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6333);




const Contact = ()=>{
    const { nav  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { 0: mailData , 1: setMailData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        message: ""
    });
    const { name , email , message  } = mailData;
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onChange = (e)=>setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    const onSubmit = (e)=>{
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
            clearError();
        } else {
            emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().send("service_seruhwu", "template_21aw58z", mailData, "Q3pccdLZhU-mZT7tQ" // public api
            ).then((response)=>{
                setError(false);
                clearError();
                setMailData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (err)=>{
                console.log(err.text);
            });
        }
    };
    const clearError = ()=>{
        setTimeout(()=>{
            setError(null);
        }, 2000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "contact",
        className: `${nav === "contact" ? "active" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "contact-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container page-title text-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "text-center",
                            children: [
                                "get ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "in touch"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "title-head-subtitle",
                            children: "I\u2019m always open to discussing product design work or partnerships."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row contact",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 col-md-4 col-xl-4 leftside",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "custom-list",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: "font-weight-600",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-title",
                                                            children: "Phone"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-whatsapp"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-content",
                                                            children: "+65 81117077"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: "font-weight-600",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-title",
                                                            children: "email"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-envelope-o fs-14"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-content",
                                                            children: "joelotic@gmail.com"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: "font-weight-600",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-title",
                                                            children: "github"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-instagram"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-content",
                                                            children: "joel.198"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: "font-weight-600",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-title",
                                                            children: "Dribbble "
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-dribbble"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "contact-content",
                                                            children: "joel.dribble"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "social",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "font-weight-600 uppercase",
                                                children: "Social Profiles"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "list-inline social social-intro text-center p-none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "facebook",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            title: "Facebook",
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-facebook"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "twitter",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            title: "Twitter",
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "youtube",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            title: "Youtube",
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-youtube"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "dribbble",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            title: "Dribbble",
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-dribbble"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 col-md-8 col-xl-8 rightside",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "contactform",
                                        onSubmit: (e)=>onSubmit(e),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-xl-6",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-user prefix"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "name",
                                                                name: "name",
                                                                onChange: (e)=>onChange(e),
                                                                value: name,
                                                                type: "text",
                                                                className: "form-control",
                                                                placeholder: "YOUR NAME",
                                                                required: ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-xl-6",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-envelope prefix"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "email",
                                                                type: "email",
                                                                name: "email",
                                                                onChange: (e)=>onChange(e),
                                                                value: email,
                                                                className: "form-control",
                                                                placeholder: "YOUR EMAIL",
                                                                required: ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-xl-12",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-comments prefix"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                id: "comment",
                                                                name: "message",
                                                                onChange: (e)=>onChange(e),
                                                                value: message,
                                                                className: "form-control",
                                                                placeholder: "YOUR MESSAGE",
                                                                required: "",
                                                                defaultValue: ""
                                                            }),
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "submit-form",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn button-animated",
                                                    type: "submit",
                                                    name: "send",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-send"
                                                            }),
                                                            " Send Message"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-message",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: error ? "empty_notice" : "returnmessage",
                                                        style: {
                                                            display: error == null ? "none" : "block"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: error ? "Please Fill Required Fields" : "Your message has been received, We will contact you soon."
                                                        })
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "output_message text-center font-weight-600 uppercase"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 8732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/navContext.js
var navContext = __webpack_require__(6333);
// EXTERNAL MODULE: external "react-moving-text"
var external_react_moving_text_ = __webpack_require__(6977);
var external_react_moving_text_default = /*#__PURE__*/__webpack_require__.n(external_react_moving_text_);
;// CONCATENATED MODULE: ./src/components/AnimationText.js


const AnimationText = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
        className: "ah-headline d-flex",
        children: [
            `I'm`,
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_moving_text_default()), {
                type: "typewriter",
                dataText: [
                    "joel otic",
                    "a fullstack software engineer",
                    "a data analyst",
                    "a cloud engineer",
                    "a devops CI/CD engineer", 
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AnimationText = (AnimationText);

;// CONCATENATED MODULE: ./src/components/Home.js


// import Poster from "../../public/img/bg-video-poster.jpg";


const Home = ({ leftImg , video , leftImgSrc  })=>{
    const { nav , changeNav  } = (0,external_react_.useContext)(navContext/* default */.Z);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "home",
        className: `${nav === "home" ? "active" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "main-text-container",
            children: [
                leftImg && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "leftimagepicture",
                    src: `${leftImgSrc ? leftImgSrc : "img/leftimage-dark.jpg"}`,
                    alt: ""
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main-text",
                    id: "selector",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Hi there !"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_AnimationText, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                `I'm`,
                                " a fullstack software engineer based in Singapore . I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "call-to-actions-home",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#about",
                                        onClick: ()=>changeNav("about"),
                                        className: "btn link-portfolio-one",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-user"
                                                }),
                                                "more about me"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#work",
                                        onClick: ()=>changeNav("work"),
                                        className: "btn btn-secondary link-portfolio-two",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-suitcase"
                                                }),
                                                "portfolio"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Home = (Home);


/***/ })

};
;