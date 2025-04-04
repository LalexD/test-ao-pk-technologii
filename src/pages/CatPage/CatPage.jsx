import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Preview from "../../components/Preview/Preview";
import * as SC from "./CatPage.styles";
import CheckBox from "../../components/Checkbox/CheckBox";
import { getRandomCat } from "../../api/CatApi";

const CatPage = () => {
  const [catData, setCatData] = useState(null);
  const [isProgress, setIsProgress] = useState(false);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  const timerInterval = useRef(null);

  const updateCat = () => {
    if (isProgress) return;
    setIsProgress(true);
    getRandomCat().then((data) => {
      setCatData(data);
      setIsProgress(false);
    });
  };

  useEffect(() => {
    updateCat();
  }, []);

  useEffect(() => {
    if (isAutoRefresh) {
      timerInterval.current = setInterval(() => updateCat(), 5000);
      return () => {
        clearInterval(timerInterval.current);
      };
    } else {
      if (timerInterval.current) clearInterval(timerInterval.current);
    }
  }, [isAutoRefresh]);

  const handleGetCat = () => {
    updateCat();
  };

  const toogleAutoRefresh = () => {
    setIsAutoRefresh((active) => !active);
  };

  const toogleEnabled = () => {
    setIsEnabled((active) => !active);
  };

  return (
    <SC.CatPageMain>
      <CheckBox label="Enabled" isActive={isEnabled} onChange={toogleEnabled} />
      {isEnabled && (
        <>
          <CheckBox
            label="Auto-refresh every 5 second"
            isActive={isAutoRefresh}
            onChange={toogleAutoRefresh}
          />
          <Button
            isLoading={isProgress}
            variant="cat"
            text="Get cat"
            onClick={handleGetCat}
          />
          {catData && catData.url && <Preview url={catData.url} />}
        </>
      )}
    </SC.CatPageMain>
  );
};

export default CatPage;
