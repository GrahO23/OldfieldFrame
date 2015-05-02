# OLDFIELD INFO FRAME

##HEROKU

git push heroku master

//Test
heroku open

#########
#########Disable screen saver on Kindle
;debugon
~ds

http://www.amazon.com/forum/kindle?_encoding=UTF8&cdForum=Fx1D7SY3BVSESG&cdThread=Tx1G0HQV9HUSCT5

#########


node /share/Public2/kindle/OldfieldFrame/app.js &

/share/HDA_DATA/.qpkg/autorun
/share/HDA_DATA/.qpkg/autorun/autorun.sh

//http://wiki.qnap.com/wiki/Running_Your_Own_Application_at_Startup

http://failshell.io/qnap/qnap-starting-ipkg-services-at-boot-time/

 '~ds' ('disable screensaver') at home screen,
 
/* autorun.sh*/
#!/bin/sh
export PATH=$PATH:/mnt/ext/opt/node/bin/
echo "QPKG called me." >> /share/HDA_DATA/.qpkg/autorun/log.txt
date >> /share/HDA_DATA/.qpkg/autorun/log.txt
/bin/sh -c "/mnt/ext/opt/node/bin/node /share/Public2/kindle/OldfieldFrame/app.js" &
echo "started /share/HDA_DATA/.qpkg/autorun/autorun.sh" >> /share/HDA_DATA/.qpkg/autorun/log.txt
/***/



#!/bin/sh
export PATH=$PATH:/mnt/ext/opt/node/bin/
echo "QPKG called me." >> /share/HDA_DATA/.qpkg/autorun/log.txt
date >> /share/HDA_DATA/.qpkg/autorun/log.txt
/bin/sh -c "/mnt/ext/opt/node/bin/node /share/Public2/kindle/OldfieldFrame/app.js" &
echo "started /share/HDA_DATA/.qpkg/autorun/autorun.sh" >> /share/HDA_DATA/.qpkg/autorun/log.txt

mkdir /tmp/rmd
mount /dev/mtdblock5 /tmp/rmd/
umount /tmp/rmd/




{
    "ArrayOfLineStatus": {
        "$": {
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
            "xmlns": "http://webservices.lul.co.uk/"
        },
        "LineStatus": [{
            "$": {
                "ID": "0",
                "StatusDetails": ""
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "1",
                    "Name": "Bakerloo"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "GS",
                    "CssClass": "GoodService",
                    "Description": "Good Service",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "1",
                "StatusDetails": ""
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "2",
                    "Name": "Central"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "GS",
                    "CssClass": "GoodService",
                    "Description": "Good Service",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "10",
                "StatusDetails": ""
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "7",
                    "Name": "Circle"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "GS",
                    "CssClass": "GoodService",
                    "Description": "Good Service",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "2",
                "StatusDetails": ""
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "9",
                    "Name": "District"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "GS",
                    "CssClass": "GoodService",
                    "Description": "Good Service",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "8",
                "StatusDetails": ""
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "8",
                    "Name": "Hammersmith and City"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "GS",
                    "CssClass": "GoodService",
                    "Description": "Good Service",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "4",
                "StatusDetails": ""
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "4",
                    "Name": "Jubilee"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "GS",
                    "CssClass": "GoodService",
                    "Description": "Good Service",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "9",
                "StatusDetails": "No service between Wembley Park and Northwood / Uxbridge due to planned engineering work. GOOD SERVICE on the rest of the line.\\nUntil Monday 11 August there will be no weekday service between Ruislip and Uxbridge. Closures at weekends will be different. Please check tfl.gov.uk, Tweet @metline or speak to staff for help planning your journey."
            },
            "BranchDisruptions": [{
                "BranchDisruption": [{
                    "StationTo": [{
                        "$": {
                            "ID": "165",
                            "Name": "Northwood"
                        }
                    }],
                    "StationFrom": [{
                        "$": {
                            "ID": "255",
                            "Name": "Wembley Park"
                        }
                    }],
                    "Status": [{
                        "$": {
                            "ID": "PC",
                            "CssClass": "DisruptedService",
                            "Description": "Part Closure",
                            "IsActive": "true"
                        },
                        "StatusType": [{
                            "$": {
                                "ID": "1",
                                "Description": "Line"
                            }
                        }]
                    }]
                }, {
                    "StationTo": [{
                        "$": {
                            "ID": "244",
                            "Name": "Uxbridge"
                        }
                    }],
                    "StationFrom": [{
                        "$": {
                            "ID": "255",
                            "Name": "Wembley Park"
                        }
                    }],
                    "Status": [{
                        "$": {
                            "ID": "PC",
                            "CssClass": "DisruptedService",
                            "Description": "Part Closure",
                            "IsActive": "true"
                        },
                        "StatusType": [{
                            "$": {
                                "ID": "1",
                                "Description": "Line"
                            }
                        }]
                    }]
                }]
            }],
            "Line": [{
                "$": {
                    "ID": "11",
                    "Name": "Metropolitan"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "PC",
                    "CssClass": "DisruptedService",
                    "Description": "Part Closure",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "5",
                "StatusDetails": ""
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "5",
                    "Name": "Northern"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "GS",
                    "CssClass": "GoodService",
                    "Description": "Good Service",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "6",
                "StatusDetails": "Until Monday 11 August, no service between Rayners Lane and Uxbridge due to planned engineering work. Please check tfl.gov.uk, Tweet @piccadillyline or speak to staff for help planning your journey."
            },
            "BranchDisruptions": [{
                "BranchDisruption": [{
                    "StationTo": [{
                        "$": {
                            "ID": "244",
                            "Name": "Uxbridge"
                        }
                    }],
                    "StationFrom": [{
                        "$": {
                            "ID": "187",
                            "Name": "Rayners Lane"
                        }
                    }],
                    "Status": [{
                        "$": {
                            "ID": "PC",
                            "CssClass": "DisruptedService",
                            "Description": "Part Closure",
                            "IsActive": "true"
                        },
                        "StatusType": [{
                            "$": {
                                "ID": "1",
                                "Description": "Line"
                            }
                        }]
                    }]
                }]
            }],
            "Line": [{
                "$": {
                    "ID": "6",
                    "Name": "Piccadilly"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "PC",
                    "CssClass": "DisruptedService",
                    "Description": "Part Closure",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "7",
                "StatusDetails": ""
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "3",
                    "Name": "Victoria"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "GS",
                    "CssClass": "GoodService",
                    "Description": "Good Service",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "11",
                "StatusDetails": "Train service will resume at 06.15 tomorrow."
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "12",
                    "Name": "Waterloo and City"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "SC",
                    "CssClass": "GoodService",
                    "Description": "Service Closed",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "82",
                "StatusDetails": "No service beween Clapham Junction and Kensington (Olympia) and between Camden Road and Willesden Junction via West Hampstead due to planned engineering work. GOOD SERVICE on other routes."
            },
            "BranchDisruptions": [{
                "BranchDisruption": [{
                    "StationTo": [{
                        "$": {
                            "ID": "122",
                            "Name": "Kensington (Olympia)"
                        }
                    }],
                    "StationFrom": [{
                        "$": {
                            "ID": "302",
                            "Name": "Clapham Junction"
                        }
                    }],
                    "Status": [{
                        "$": {
                            "ID": "PC",
                            "CssClass": "DisruptedService",
                            "Description": "Part Closure",
                            "IsActive": "true"
                        },
                        "StatusType": [{
                            "$": {
                                "ID": "1",
                                "Description": "Line"
                            }
                        }]
                    }]
                }, {
                    "StationTo": [{
                        "$": {
                            "ID": "269",
                            "Name": "Willesden Junction"
                        }
                    }],
                    "StationFrom": [{
                        "$": {
                            "ID": "299",
                            "Name": "Camden Road"
                        }
                    }],
                    "Status": [{
                        "$": {
                            "ID": "PC",
                            "CssClass": "DisruptedService",
                            "Description": "Part Closure",
                            "IsActive": "true"
                        },
                        "StatusType": [{
                            "$": {
                                "ID": "1",
                                "Description": "Line"
                            }
                        }]
                    }]
                }]
            }],
            "Line": [{
                "$": {
                    "ID": "82",
                    "Name": "Overground"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "PC",
                    "CssClass": "DisruptedService",
                    "Description": "Part Closure",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }, {
            "$": {
                "ID": "81",
                "StatusDetails": ""
            },
            "BranchDisruptions": [""],
            "Line": [{
                "$": {
                    "ID": "81",
                    "Name": "DLR"
                }
            }],
            "Status": [{
                "$": {
                    "ID": "GS",
                    "CssClass": "GoodService",
                    "Description": "Good Service",
                    "IsActive": "true"
                },
                "StatusType": [{
                    "$": {
                        "ID": "1",
                        "Description": "Line"
                    }
                }]
            }]
        }]
    }
}






<ArrayOfLineStatus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://webservices.lul.co.uk/">
<LineStatus ID="0" StatusDetails="">
<BranchDisruptions/>
<Line ID="1" Name="Bakerloo"/>
<Status ID="GS" CssClass="GoodService" Description="Good Service" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="1" StatusDetails="">
<BranchDisruptions/>
<Line ID="2" Name="Central"/>
<Status ID="GS" CssClass="GoodService" Description="Good Service" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="10" StatusDetails="">
<BranchDisruptions/>
<Line ID="7" Name="Circle"/>
<Status ID="GS" CssClass="GoodService" Description="Good Service" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="2" StatusDetails="">
<BranchDisruptions/>
<Line ID="9" Name="District"/>
<Status ID="GS" CssClass="GoodService" Description="Good Service" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="8" StatusDetails="">
<BranchDisruptions/>
<Line ID="8" Name="Hammersmith and City"/>
<Status ID="GS" CssClass="GoodService" Description="Good Service" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="4" StatusDetails="">
<BranchDisruptions/>
<Line ID="4" Name="Jubilee"/>
<Status ID="GS" CssClass="GoodService" Description="Good Service" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="9" StatusDetails="No service between Wembley Park and Northwood / Uxbridge due to planned engineering work. GOOD SERVICE on the rest of the line. Until Monday 11 August there will be no weekday service between Ruislip and Uxbridge. Closures at weekends will be different. Please check tfl.gov.uk, Tweet @metline or speak to staff for help planning your journey.">
<BranchDisruptions>
<BranchDisruption>
<StationTo ID="165" Name="Northwood"/>
<StationFrom ID="255" Name="Wembley Park"/>
<Status ID="PC" CssClass="DisruptedService" Description="Part Closure" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</BranchDisruption>
<BranchDisruption>
<StationTo ID="244" Name="Uxbridge"/>
<StationFrom ID="255" Name="Wembley Park"/>
<Status ID="PC" CssClass="DisruptedService" Description="Part Closure" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</BranchDisruption>
</BranchDisruptions>
<Line ID="11" Name="Metropolitan"/>
<Status ID="PC" CssClass="DisruptedService" Description="Part Closure" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="5" StatusDetails="">
<BranchDisruptions/>
<Line ID="5" Name="Northern"/>
<Status ID="GS" CssClass="GoodService" Description="Good Service" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="6" StatusDetails="Until Monday 11 August, no service between Rayners Lane and Uxbridge due to planned engineering work. Please check tfl.gov.uk, Tweet @piccadillyline or speak to staff for help planning your journey.">
<BranchDisruptions>
<BranchDisruption>
<StationTo ID="244" Name="Uxbridge"/>
<StationFrom ID="187" Name="Rayners Lane"/>
<Status ID="PC" CssClass="DisruptedService" Description="Part Closure" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</BranchDisruption>
</BranchDisruptions>
<Line ID="6" Name="Piccadilly"/>
<Status ID="PC" CssClass="DisruptedService" Description="Part Closure" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="7" StatusDetails="">
<BranchDisruptions/>
<Line ID="3" Name="Victoria"/>
<Status ID="GS" CssClass="GoodService" Description="Good Service" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="11" StatusDetails="Train service will resume at 06.15 tomorrow.">
<BranchDisruptions/>
<Line ID="12" Name="Waterloo and City"/>
<Status ID="SC" CssClass="GoodService" Description="Service Closed" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="82" StatusDetails="No service beween Clapham Junction and Kensington (Olympia) and between Camden Road and Willesden Junction via West Hampstead due to planned engineering work. GOOD SERVICE on other routes.">
<BranchDisruptions>
<BranchDisruption>
<StationTo ID="122" Name="Kensington (Olympia)"/>
<StationFrom ID="302" Name="Clapham Junction"/>
<Status ID="PC" CssClass="DisruptedService" Description="Part Closure" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</BranchDisruption>
<BranchDisruption>
<StationTo ID="269" Name="Willesden Junction"/>
<StationFrom ID="299" Name="Camden Road"/>
<Status ID="PC" CssClass="DisruptedService" Description="Part Closure" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</BranchDisruption>
</BranchDisruptions>
<Line ID="82" Name="Overground"/>
<Status ID="PC" CssClass="DisruptedService" Description="Part Closure" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
<LineStatus ID="81" StatusDetails="">
<BranchDisruptions/>
<Line ID="81" Name="DLR"/>
<Status ID="GS" CssClass="GoodService" Description="Good Service" IsActive="true">
<StatusType ID="1" Description="Line"/>
</Status>
</LineStatus>
</ArrayOfLineStatus>