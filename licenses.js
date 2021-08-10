const licenseBadges = {
    Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    GNU_v3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    BSD2: "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    BSD3: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    Boost: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    CreativeZero: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    Eclipse: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
};

module.exports = [
    {
        "name": "Apache License 2.0",
        "value":
        {
            "badge": licenseBadges.Apache,
            "display": "Apache License 2.0"
        }
    },
    {
        "name": "GNU General Public License v3.0",
        "value":
        {
            "badge": licenseBadges.GNU_v3,
            "display": "GNU General Public License v3.0"
        }
    },
    {
        "name": "MIT License",
        "value":
        {
            "badge": licenseBadges.MIT,
            "display": "MIT License"
        }
    },
    {
        "name": "BSD 2-Clause License",
        "value":
        {
            "badge": licenseBadges.BSD2,
            "display": "BSD 2-Clause License"
        }
    },
    {
        "name": "BSD 3-Clause License",
        "value":
        {
            "badge": licenseBadges.BSD3,
            "display": "BSD 3-Clause License"
        }
    },
    {
        "name": "Boost Software License 1.0",
        "value":
        {
            "badge": licenseBadges.Boost,
            "display": "Boost Software License 1.0"
        }
    },
    {
        "name": "Creative Commons Zero v1.0 Universal",
        "value":
        {
            "badge": licenseBadges.CreativeZero,
            "display": "Creative Commons Zero v1.0 Universal"
        }
    },
    {
        "name": "Eclipse Public License 2.0",
        "value":
        {
            "badge": licenseBadges.Eclipse,
            "display": "Eclipse Public License 2.0"
        }
    }
]