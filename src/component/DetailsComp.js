import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Link from "next/link";

function DetailsComp() {
  const { query } = useRouter();
  const { postid, tabIndex } = query;

  const [postdetails, setPostdetails] = useState({});
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (postid) {
      getPostDetails(postid).then((res) => {
        if (res.recordset) setPostdetails(res.recordset[0]);
      });
    }
  }, [postid]);

  useEffect(() => {
    if (tabIndex !== undefined || tabIndex != null) {
      setValue(parseInt(tabIndex));
    }
  }, [tabIndex]);

  const getPostDetails = async (postid) => {
    const response = await fetch(`http://localhost:3005/api/users/${postid}`);
    const data = response.json();

    return data;
  };

  console.log({ postdetails });
  if (!postid) {
    return <div>click card to view details</div>;
  }
  return (
    <div className="card m-3">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Link
                href={`/client-side-path?postid=${query.user_id}&tabIndex=0`}
              >
                <Tab label="Item One" value="0" />
              </Link>
              <Link
                href={`/client-side-path?postid=${query.user_id}&tabIndex=1`}
              >
                <Tab label="Item Two" value="1" />
              </Link>
              <Link
                href={`/client-side-path?postid=${query.user_id}&tabIndex=2`}
              >
                <Tab label="Item Three" value="2" />
              </Link>
            </TabList>
          </Box>
          <TabPanel value={0}>
            <h1>
              Details{tabIndex} {query?.first_name ?? ""}
            </h1>
            <p>{postdetails.first_name}</p>
            <p>{postdetails.phone_no}</p>{" "}
          </TabPanel>
          <TabPanel value={1}>
            <h1>
              Details{tabIndex} {query?.first_name ?? ""}
            </h1>
            <p>{postdetails.first_name}</p>
            <p>{postdetails.phone_no}</p>{" "}
          </TabPanel>
          <TabPanel value={2}>
            <h1>
              Details{tabIndex} {query?.first_name ?? ""}
            </h1>
            <p>{postdetails.first_name}</p>
            <p>{postdetails.phone_no}</p>{" "}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default DetailsComp;
