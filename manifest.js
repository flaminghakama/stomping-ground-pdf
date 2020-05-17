/*
 *  Song specificiation for Alt Jazz song Stomping Ground 
 */

var altJazzSongs = altJazzSongs || {};

altJazzSongs["Stomping Ground"] = {

    partsInBooks: {
        "Flute, Alto Flute & Piccolo": {
            "Stomping Ground": [ "Flute" ], 
        },
        "English Horn": {
            "Stomping Ground": [ "English Horn in F" ], 
        },
        "Bass Clarinet": {
            "Stomping Ground": [ "Bass Clarinet in Bb" ],
        },
        "Voice/Percussion": {
            //"Stomping Ground": [ "Voice" ],
        },
        "Drums": {
            "Stomping Ground": [ "Clave" ], 
        },
        "Violin I": {
            "Stomping Ground": [ "Violin I" ], 
        },
        "Violin II": {
            "Stomping Ground": [ "Violin II" ], 
        },
        "Viola": {
            "Stomping Ground": [ "Viola" ], 
        },
        "'Cello": {
            "Stomping Ground": [ "'Cello" ],
        },
        "Bass": {
            "Stomping Ground": [ "Bass" ], 
        }
    },

    songs: {

        "Stomping Ground": {
            metadata: { 
                "Transposed": { fileSuffix: "Score-Transposed" },                "Transposed": { fileSuffix: "Score-Transposed" },
            },
            baseUrl: 'http://ali-cia.net/altjazz/scores/', 
            pdfSubdir: "/",
            fileLocation: "stomping-ground",
            filePrefix: "stomping-ground-",
            parts: {
                "Piccolo": { fileSuffix: "Piccolo" },
                "Flute": { fileSuffix: "Flute" },
                "English Horn in F": { fileSuffix: "English-Horn-in-F" },
                "Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
                "Clarinet in A": { fileSuffix: "Clarinet-in-A" },
                "Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
                "Solo Tenor Saxophone in Bb": { fileSuffix: "Solo-Tenor-Saxophone-in-Bb" },
                "Lead Sheet": { fileSuffix: "Lead-Sheet" },
                "Claps": { fileSuffix: "Claps" },
                "Clave": { fileSuffix: "Clave" },
                "Drums": { fileSuffix: "Condensed-Score" },
                "Violin I": { fileSuffix: "Violin-I" },
                "Violin II": { fileSuffix: "Violin-II" },
                "Viola": { fileSuffix: "Viola" },
                "'Cello": { fileSuffix: "Cello" },
                "Bass": { fileSuffix: "Bass" }
            },
            scores: {
                "Transposed": { fileSuffix: "Score-Transposed" }
            },
            recordings: {
                reference: {
                    description: 'reference track',
                    url: 'https://soundcloud.com/david-elaine-alt/stomping-ground-reference-track'
                },
                performance: {
                    description: 'alt.musica saxophone edition from Parallel Play (for tracking)',
                    url: 'https://soundcloud.com/david-elaine-alt/stomping-ground-2'
                },
                debut: {
                    description: 'original alt.musica premiere',
                    url: 'https://soundcloud.com/david-elaine-alt/stomping-ground'
                },
                track: {
                    description: 'String Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/stomping-ground-string-quartet-accompaniment'
                }
            }
        }
    }
};