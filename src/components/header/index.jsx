import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "gatsby";
import ThemeContext from "src/context/theme-context";
import AnimateHeight from "react-animate-height";
import HeaderMenu from "src/components/header/header-menu";
import AnimatedUnderlineMenu from "src/components/header/animated-underline-menu";


import MenuSvg from "src/images/svg/menu.svg";
import SearchSvg from "src/images/svg/search.svg";

import "./style.css";

const Header = () => {
    const theme = useContext(ThemeContext);
    const headerRef = useRef(null);
    const [isOpeMobileMenu, setOpenMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setOpenMobileMenu(!isOpeMobileMenu);
    };
    useEffect(() => {
        theme.dispatch({
            type: "headerHeight",
            payload: headerRef.current?.offsetHeight,
        });
    }, [headerRef]);


    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };






    return (
        <>
            <header ref={headerRef}>
                <div className="fixing">
                    <div className="top-header">
                        <div className="container-fluid-custom container">
                            {/*<div className="time floatLeft">*/}
                            {/*    {new Date()}*/}
                            {/*</div>*/}
                            <nav className="header-menu-desktop">
                                <AnimatedUnderlineMenu />
                            </nav>
                            <div
                                className="mobileMenu"
                                onClick={toggleMobileMenu}
                                role="presentation"
                            >
                                MENU
                                <MenuSvg />
                            </div>
                        </div>
                    </div>
                    <nav className="header-menu-mobile">
                        <AnimateHeight
                            duration={500}
                            id="animation-height-header"
                            height={isOpeMobileMenu ? "auto" : 0}
                        >
                            <HeaderMenu />
                        </AnimateHeight>
                    </nav>
                    <div className="bottom-header">
                        <div className="container">
                            <Link to={"/"} className="header_logo-item">
                                <img src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAABWCAYAAADxNUxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO2deZwcVbX4v+dW9yyZ7IEEVEACRHb1FzZRUTHozw2VJyiKbELigj95+JQ8N1BREvShP58+fkRUEGUXWQVZ5D0UASGISwQCCZsSgSQTEpKZnu665/fHqcpUepueme6ZyXC/fIpJd1XdunW76tSpc88iqkogEAgERh432h0IBAKBlypBAAcCgcAoEQRwIBAIjBJBAAcCgcAoEQRwIBAIjBJBAAcCgcAoEQRwIBAIjBJBAAcCgcAokRvtDgQCYwkRGcnD5YDZwCpgQ70NQ8DU+CRowIFAY0wCPgbs3cQ23wzcBvxLE9sMbEUEDTgQaIyXAZ8D/gG8H1g/zPYmAV8EdgDyw2wrsJUSNOBAoDGeBpYBhwL/BlSzVUTALsDhwIeAg4DOGu2dgmnA/wNc2eS+BrYSJNiWAoF+BrAB7wdchWmtHwYuz6zbCzgTmAd0YQJagIcwgf3rzLZvxITuNsBhwB0D9Svcp+OToAEHAo1zP/BNwAPnAm9Kvj8EuBr4ABADvwGuxzTmvYEbgFOTbeck+84Cvgb8doT6HhiDBA04EMiQ0YD3wjTUe4BC2WZfBb4C/A34L+A4YH/gZuAMTOvtAyZjpohvJvv9X+D1mOnhamABsLqs7eOBo4FvAHemX4b7dHwSBHAgkCERwO2YYD0R+DpwFiZQU3LAt4HPAL1AB2ZiOBmzFZfzYeAHwBTMLPEb4ATgqbLtPo8Jd4cJ5wvTFeE+HZ8EE0QgUEkBeDT595cxbfU1mfUlzKTwVUz4PovZf6sJX4BLMGEqwH9jpoqs8N0JuAhYlLT3PcLE3EuCIIADgeqcg5kWVgHvwjTc0zD3sZSVyd+bMXNEPS4DnsPMEpuS7yZgWvPNwLGYID8RM29sHPYZBMY8QQAHAtXxwE+BtwOXAjMxoXwH5g88EXhbsu21DOwX/CfgPmBH4B2Ybfg6zC68O3AL8D5ME+5p4nkExjDBBhwIZKjhhuaAdwP/AewKFDFzw8uBF4AjgLsaaP4bmJ13PRZ8MQmbhPs8ZnJ4sWz7GcArgBWqWr4uMA4IGnAgsCUnAAeWfecxbfV1mKngLsxu2w6swEwLjfBnLOfDdMxdbSGwJ6ZplwvY3YAfAw9ivsWBcUgQwIHAlnwcuBE4CROwWVYDF2PmAsFstufQP2E3EJcDn0jamYppwBsxYZyyDZZz4josou6fNC7gA1sZwQQRCGQQkZ8BH8Emyu7FhO3twCNY8MSnMSG9HhOU1w7hMO8BzsNMGHdgARs9wLbA/8KCNTqAh5Nj/U+4T8cnQQAHAhlEJIeFDn8Z81LwmHlgLdAGbA90Y366Vw3jUG/AJtxmYzZlxfyLHSbcfwx8C3gGgh/weCUI4EAgQ2YSbg/MDe1A4JWY94LDzAELgGuacLi5wPexpD0e87a4DNOInyETgRfu0/FJsAEHAtV5GEsX+R4sZ68Dngc+RXOEL8BS4Bgs5NhhQv4R4HEqw58D45AggAOB6ig2OfZZLDhiNSZ8h2N2qMYK4IOYUH8j8Cvg4CYfIzBGCSaIQCBDxgQhmAb8dcwG/HHg5y089FTg7OQ4D2LmCZ+uDPfp+KSiIsbSckd0AXQCk3F0uphNztOhEfci4IvMlTwqQqygAq8q1S1tVcGjOYvsVHLktAeIKJFHiUEcJR8TaUwRpa/KW9nccGEGWsM84JNYEp5jgV+2+HjrgF9gUXI3kBG+gfHLsEoSafL/XUpDD9LZLSOwV0Ydw+lOINBMbsW00NuxpOl/pXF/38EyDXNpOxXzDT6vRccJjDGGJYAl+f+K3KTNGjBEs4TSHg7ZC3Gz0XgmyCRFiNAXEZ6L1T0h+GUe+ZugqyDRgId9OoFAU1kF/B4LnvgQ8BMsY9nzTWp/ImZfPhnLPxxjnhfPNKn9wBinKRowyCwncjgi7xX8AeC21bRklkSkRoIYsTotAoIQwRqQ+xWuVeVawoUXGHt8HrvIT8CyoR2HaceXYsna17BlJFs9HKbh7oAFexyH+RWDadinJW0HXiJUTMI1agO+B8Gp3+kAiU4pivuIwvZatluCCtoLoEhHuqp8W4HnRUuXoPKfJXIrgg04MBrUqQn3RixAYx4WoKFYXodbsRy/z2EBFBuwwArBFJwuLLx4Byzvw37Azlixzj7gAeACLOdwd62Dh0m48cmQBHCkUX4T0WmRyGfbYVufbCgogq4A7lbVP6jLPUap8KxHNkSgHiZFUW6m13hXJ7K/g9d5ZI4iiUAWHLrOK9/xqucg0hsEcGAkGaAoZxfwaiwpz5uAt9IvjGNs4iz9K/S7eebof9uMgeWY728qvLsZYNItCODxyaAF8Ebnds+rnI+4Q/zmTfwmUX7Zlu+92KveVSh1vgigLkJKRbx6IhxeFBe1UdICHaLk8RM20HkQykfzwr8oOklTM4XqPR4+UfD+wVwQwIERYgABDP2CdSKmye6GTdbtjuUMnpqsi7Bgim7gSeAv2CTe08ATmMbcR4PmiyCAxycNC+BJCBOcf2ePa/sJ6Eywq7CkpZ+2u8I5OdFlEgke6O3r3Lyvxn2otNlHEZwIJS3SLp48ygt0UvKeLie7KfI5h57kEzOFQ18oej6GL/4iCODASNCAAN5ic+w2iDANN58sQr9gLWEmiVQzVhq3GW8mCODxSUUkXIzbYkl/dnW5D/W53NUmfAUHK1T9u3u1cJwXlomwhWFXPWipiLo+wE1RkU6cwws4hbgEBc3ThtLhBEUejdXNL3oOE/QhATwyJe/c5ZFzJ4TLLzASqGoq7BqRxKkw7cOyp72ARcw9jyXvWYvZhXuSbUo0JnxfARwJRJn+BMYhFV4QM9q3NEVt6otwTg/POX4aI3kzD8S3xshxAquyV2mbg54YYhVQzCasbB8JNyg8560Y4UYT1OIU2V4gikBBJSdFH+c33u772g+JJHeBSvRej0bO5X+YQ3qLvnCpNHRftB4ROR+YP8Tdr8TyACzF8gw0wnCOV84CYEkTj9MNLE7+fRt2Xq1kJMb+A5i54F62nDNuJZMxu/L7Md/j5SLyp0Hsf3rydx71k7gvwerZLVXVRq+/QAuoEMC7TN7y8z/WRK/tcfmLPZp3KLFGl8WxnhhF/XWrBJCccmdPjn0ii4wTPCLR7MhN/KXCvgBOucajR3lx3RLlpkf4O2PLgaqACK4kha7Xgzzk/Ysf6Iqi8zfJhBM9GrU79yPHpCcjn/t9S0dkZDgyWcBuhIUMXAW35gz5EGhmW2CBBIvK2l9Mv1AeSzQ69osxG+8XMEF93wj07WgsHDm1H09vYJ952MPoyIE2zJA+vBbSuAIQaAEVJojnn3fJEvHc8zKpKLmfKEwWQFV/1RvnjgfXs/kNTZRSKaJnIzyijpi8ab4ie0VR/teK21fB/CPQeQ65AXUzUd1Ef1WAycnfaUo+8hohaGnG5NLJaHxFYo7obBP5iYifbqa0dBk1Vg68SUPMBq6gX3upxUgJ4GacVyqQ1zI4wdAoIzH2L2DVKj6PJeBpRBgOhw5MmE7BKm3E1K+MPBvzoriVoY9xs8YxMEQqBHA3k5JlIuvclK8UJfdqAMU/1Ov7ji3RVyhRJNY+ACKfo+TbKNFJWyIQReTAnONmD7tWvrvpwXnHjU7jPaisg1UCVRPubSD4QqwngTwAEAtzxMXf7KWXjWxi4/gqHruI1gir0WQaJuAWDbThKFNt7BUThGux6/RlLe5DHgvqSIVuH5X3R8o84H6GXyuu1aaiwABUpqPMech5JBfvE7n40wARUoi07STR/Jp2YnII4iMUIUd7MlWnFE3PfUuE3OBFXlHtgIrgRfbDRdd6ZGq1bQSP0sHqtTk60Q0uLn5MELswxX0sL/q6Djwd4y9fyUBacLMYac3ndMa+EC4f+01YVWIwl7FmhR/XYgNmdvAkDkaY90Q58zGtd9pwD6iqQQMeZSoEsHeCOhDcFzzSDh5HdN4r4t1+/yr2YXf2YSf2YaKbCXg0E5A8R/Lvzqleq+g2Ax3Yw8vVTA811gsbyeMpEWvpQdXSuSDESK7TtX1p121i5mxXGsapt4zFqirlC/YKu5D6wm8utW+sWmaDBWwOJqy77Jccf2GdtupR6zgLqT2hl+V0Wq/hL6Z6H4cy9s9igRcem6coL9DZbBwWHQc2N1NttnkeNgFZi27sPA+j+jgsoP/3CsJ3DFAxCZcrxXhkT5y8H8Ahz/fFPYue5M8AdCDcjdIuwmuI6ElEcM65D+7v3IUFs2UNG8XRSYGuyR4R8KXiuRsKXccXiXYoSvT29W2yX1uX3j+xGQcbGrWEWNULW1W7gcUisgR7fZxdY/9pddqutX0jpDP/AzFY4ZxOtC3EtNx63gnnY5M+w7VnD2rs6Z8UHMzYL8fujx5srmLKkHraODlMyAt2Dz2PmSFSUnt1Lep5tqQsCS5tY4sKDXh7X6ALf4xH2gVFVX7iNf9sTI5Y8pSI6MVt8Xh2Iic7535WsFwPTUKJyaNxYhWOdJ34wvnmbqzR2mcnH7/qsZoKdMtowFF/IIGYddnammjkvBYkS702WmmKaObYP4qZAXqxyLYB3+qGSYRp3AVMGK9my7JE51P7/A6jsbeQYSMi42GZJyKaLKcPZt9mUyGAi2hbn4sOBxCkUEIvxqltKUokW74b5YTTokiWxEhTskkq0qN2MDw5NhaEFza0s35DDlUuETSZmPDvEopdzTjmKFDL9aebrf/VcAmmDddiPk2wXw6DRsf+aWxCLI8JxFkt7leECfpeTBCvhc2zzPOpPeG2gOBKNhya7ZI5KCoE8NPSuadHdhcUj78/1tKymBIx3gy96hMHMMHBGTj3H755wRGRiH+npwiRZ5LrYdrRSo9Molc66ZX2x1G9C0DF7TQF/5pmHXiEqSWAhnIj1XqdHk0WU/9cmhVQMhQaHftVWBRbF3af7NzKTmFmjlmYzbkdewCk1QpqjddtjJDmO8aYhz2glKHNK4wZJadCAOfF7a8QgadNO++YqtN1qk6nS7tAHR5hIsJE+LYXObOZFiUFiZx+L+/8qeDxtDP5KJiy/1pUuhARFG63GQWVdS53YBMPP5LU0mbG081U71V/7oj1opJGx34NZoediPnkvryVncKE7yz6zQ7PYMJ4HrXHa2s0ZTWD0+l/kG7VrpsVArhNivukydTztN8/QSYxQSbhNEfiatb56shduLNEn+0r37kJKIhz0XdEorMgFwHM+ldPTtelJTc2TyR5ZN8WdKF+/4Y/iXEk1e2gYz0qabCa9m3U1jSG6786VAYz9uuAP2FCsRd4Fa2diJuCpbYEE/jrkn/XGquVjO3rpZWkkYvdDF9pGVVtuNINjdxs80GQ0mq/fsXjuoqn9e/0sg6H5sTJFyLxh3l7PWsJCmsjOC6mZ4F6yM+EiW/upahtlHzxCYFNCuTE7dSqPjQTEZmbGPtvpfpM9lGMT22mVnj1NEbODjwX05gGO/Y9WHViwWzBe2OpJ1vFjpgAnoRp3n9Jvq8lgLcG4TsNG3dNlmaZy5bQ7164NYxDTSoEsIhMBxBYv14mr13LNIo4Oro2kW/b4PGlc/NxYWdBL25FhwSIvD+7vVTYtdReukTzyYqeiHwUEUW5F+jXDlodHjoUFmVmWFVEFHN9WsSWN1PqsykMnAeiHvPpv8AHWkbaXlxPu2iFAF5E5TkPZ+wfxQSxJP3drvld3swemMlhApYvOC0AWsv8MGbsmHU4nS3HfWvo84hSGQmXOIMr0rudW1fYOVrNlCjGl0AivCLdvVFHn4rUjYKweixKhCeXWVwD0WuxuEKfays4xzrXAb2PCBv+MBVHAYh6QXvsGDphgKbGMtOwC/R0Rtcm2krG6g3X6NgvAx7CAjHagIOpfs8Mlzwm3FMXtOcwJaPeA3NUZ+8T0reL8oferfQnCEq11exMffZBWc8nO92mPEpxPv2TcPU4HXsAZ/t2BY3fb2ngy+b9RWSFiDQtYrWu65hs/iv4Yg6cR3M5VBxi0V019tOSejltteaXCe1eiSA5g4lSyndI7xtjKX25zrXsYhFKfY6Ndylrr3GoCFBM+uTGizd51i/2SsylaCzcWC8FGhn757AbeC4mEA/AvBXWNrkvMzBB1Ie91f0R80FuNlrDl3Whqg7WBDaf2lF52XSY1VwSs+NcL3imFvOo/waVJiqqJtyz2fDqsYjqqQFmY2+584HDhhvOXU0Cbkr+Tljlp7Y/Gc/gyXgGz8u2xDIZZGAFQECLWri6R7zEoq8viT/IFn1DKdJVKqVfDaRICDFFP5F/nLkd8uBOTNFOJukMJui0DpAuAE3zQ4wPjqR+lNZ4Yyxpx7XGvgDckfn3HrTGG2Jv4KDk34rZngdiKCacZo35XPqF7xJgF7YMec+adVqR32Qg01ZW+C7GHmq1+leN9O1oJZUh+OmDejb1w8IbokID9qprEEHRidN1wzaalIo3cak0UihAEdqI8zu5+HjlxWNSdVVQipIreOUuQdEB2rIinxtpj7uQJMI5Jp7am2NqkrOk2ZpIM1iiqhXRYCIyG7vR51L7CZyGm+7Xuu6NKLUeJq0SvkuoHok31LFXzBPiaWxybGrSxl8q9h46gk3upSWN/oY9DAZiqAK42m8y2Leu1C+52ngvxSY2b6V2YvhmhaJXu44W0X+OR1EpbNP+1XqLnp200Y1FGG5xDFVdIiIrSc5PROaq6pCzylVRQ0srLQ5Nc+rad9sk0+mRqWzSKfjElNAICpSgp4QjuyjSR2PlXpJ2lLXRP1kTrWJNtIp10XOzQTsFR6zxEw13qEkMNRxRVVcmr3lHYRpDrR+tnpCoRtbGNtAy0lpnLQE80mkQV2Ka0FDG/kngesxNrA94C03Kd5LQAbwB07AnAX/AgkDSftdiKK58zTJvpTbUev1LvRNGMupxGls+HIYyuZ3dv1Zel6znxbDmbyoEcEnbHyTRTiP69u/Qbtr1Bdp1PTIK6R8FIU9HsnSSI79ZQ1FyjbyqNb9Pw48JX4k9XWvdEKPlJ9tsap3HaOahHezY9wC/xh5gBeBwmuuO9kqsxH0Bux9vYctKA/UeFoM1VzV7fqHedZr2rRW/dSO/3UDuaQP5qFebXMx6NqUM6wFTIYB7tP1+QUuKo01Kb5kgG9wE2UCn1MoN3WI0RvyGZFkPFOdZdY123ea96+8dnU41hXpO5OPBK6JeBNdw3O6awWDH/r+By+k3Q7y1iX15I2ZX7sC8Ln5Xtr6eIBmp/NHlpL/fPCq9ClLbaFaTHCqDfWBkH0hD9Q8e7L03rIdahQCezpqHFflrogW/tk+m79sr29Ir2+A1YuTqExre5SjmOijmOoij9t0QOcg63vvY6huTHJlbL7V+vNFMVlOLwfapXv6CsTABN5ixXw9cg0Wo9QIfA2Y2oQ9dwNswLbsN+CHJnEuGehrkfEbnYZ3N9ZFOYKZa4gqaV3NuND2Cqua/rpLre1iReFWyobWV1Ptrkjps+TbXe0KHdNMh3USDM982BRd7XMnjSjGq/lhFJghKSXPX9/bN3NprEg02+fpoMhgBXM/VZ6xE/A127G8Dbsc01b2BI5rQhwMwk0YeeBy4sco2V1L/gVUvTWU5zbyuUjNOtTYXJ+sb+a1b5fUz1HbT8xmRB1uFAHZaQLT4c0nc0dTz0aJGO/SRw6vZZEeKxJuCDo3pQLdx4k4y/VuKXosX5cZmTbjBCqpqDEZDHGvactZFqZwraW3oaCvHfjXwXUwDLmHaXdWyWw3SBXwCS0OZAy4CHqux7UCJjeolas/STAGc/sZZF7RslZRGf+dmXr/Z367ReZRyQZ32e36VdU2nMhQ56kRc22MgVwCoyLSc5L6kMZRikvpvAHVdInJSextzsmigXznx5NuKlNqUQs6d7mE7EJz2XV+avPHPfuqGAZppKbUunEYvqCtojpdAswXwcNqbj72OVmsjDf9tBqM19jcDP8IE5k7Av1P/PqjHu7CHgAMeSNqtxRLqC7RGi3Q2SwCn3ga1NOCBGIqgbITs28JQI0yzJoUraLGCUyGAp/gSU3yJqb6wqBM2KkoOTtwkMu9NupEf+j4mqAPkRQcvOOguW9Y5dHWJSEV1Q9k2L4jSq0jRtqvYt9tZOfAej2NG+ya2n1ykXYoHxRqdAqBI3wTpO2uOKnP8yAfEqeqQMqKJyLQkhDGdXa2lgdWaIGrGhTCbfifzwV74s2v0YV7S3grqO6YvYPRsv9nQ46GMfYpi2ugDyecFwEeH0J/ZwLeS9grA14G/D7DPQFGSc+kvU59N19hK0gm3wQq6pfSfS7UyVumDPH1Ilp9L+rnaQ3RhZpt0LLIcSe0oObAHXfrGMRe7rismO5PkWleIyPDGORUo6fJ/YPNyies886ncZH0sN1n/kpu84kTJb38GnTzBdJa7qVMfiSbt+Eg0aYfyZXk06RVLZUZueTR52vJoYnabHR+TrkmP5Ca2L48mVuyX7Lvjctc16SGZyFM4Vkp+xuO5rmXLc5P10dwUfTyacO5KcqRLef9HaqGGm0oTllqTV80+Xq0Z9FacV7Nn60d67MvZHxOYimVKe9cg+r49W05aDWZs5tKi8x7EdZ9yRQPtrk3Or5qwG+g3XJEsSuWDPbtvNQZq+/5M28O6D4YrRyo04AuQzcsDGi9uR+7xQAfMXuQ6Lz0RN6kgfSiyDngKixIqX/6O2cm6y7Z5iv7y29X2exp4SmGD4ugj6ii6CT8tktszqQX3515fOLNE/3/jjEYrDG9NLGDsTLzVYzBjfx9wHGYXngBcBZzRwH4HA7+hX2P8brI0ylIsUm8sTNI2YiZL822k+TSyLMaujfJ2bsN+i13oN7sM1habTgJWi4JbiI3hQP1fnPShVjXttK1hIeWv00ulv/q2Q+mQ6FVtUdtvPWwrAKo3gT+6T9te8FogL+DEkQ0rFmC9b2OyK2Kl6/vXRd4TR4IoFfuIxpTIUaJITvMT2sRf6J07Um39+qIvvHm9Fv6Yfe4dOEpVXhNzQrMKTKYFLev5xzbzeFC7im6zjpPG0bdi0m2kx74WbwAuwJK1g2VOuxQL3HgC85hwwKuBE4C30x9F9zXsJt/E4JmGaYXNqgbRcDKeJAgpNQ8cRe3fN7UTZxMeHTW8bo4+za4qXZELoiMj3WIEhUe86tFOuNYjXSLyDof8SlSP9fgVqOC0SBzlQZ3tIUK7lAA1yaoAAiKoKKhVnLNz8bRpMi8nJoAFdshHXOhxh5rwlb7pvveYvMZ/jEdH3lajGTOkS7ELs5GLf6S8HYZ7Xisxwd5KrXekx74WvwMOBb4BfARL1vNV4IvAi9j95TAtOZ2sWw58GfMrHmpRmW5MmM2jP+3jUFnJ4CZ905waA9X9y1agXsTY89YZE1QI4DijlWoijBVu914/4Jxc6WFijDu4zfnf4t1pqF6W3V8ARGkX03xFZHNgpTjBi6DiQJU0Hc9mGQ1Ewvtzkv+uwo4KOLS34N1xE318fRsxrUnHOmJk48sHe+OP1AV8G4Mvmpme122MbphxPYYz9vV4Bvgk8DPgA1hY8c70Z+DymC30HuA6zNd3FbXtl4PhNvqFYGrLrJUAB/ofOgBLy3IaNEr68BusGWQsmE3GHBUmiD9nTBCKkpeInMuDKkh0SCT+Io+8EhJRqP4aND4ndtHdqDM3NQd+s9AFjQEEiRzq40QAx6imQcUOL9FcpPQ5L9EH+3skqzp84fj13t2yC0U6KFaewSiZIAKBlyIZ09tKBrZHZ/PyHsZWXj4Imm+CGKQ6qXf24d7s4Ib00e7FvQ+Xu9PhrhN7Ldq2oZYQBJ0hIkd4565Wp7+PE+ErQF797ZH3bwa9ZSSDPwKBQF1SDToVrtW8CNJKGSuS7QbyY37JMkgN2FEC2pwTfHyyE/13j3tl2kJiTvgn6H1eWSrocpys8jEvguAi6cLH26lEuwk6V9ADFHlZdn8H/+iFb0W+9P0JuFgp8aKPmE1f0IADgVEmmYSrVw2jnIVsHV4wDdFsDXioAhiNi4hjGyE6GThB0d1sH9NWB9JZs0dNouseV+Qi4P/1oM/mfYkuIoIADgQGRkQ88BVVPauJbe6JJQn6i2piSOxPxZomua8WspvappdQaaJIw7cLWPXnZrId/fNa/6QFZZ3GmgDGI+S1bXKO/Nt6ZeP7HO5gYCcdwLwhoKBPC3pPn7prEbnJ4bsdQg9KEMCBQOOIyFLgDlX9tya0dQjmXpfmPV6PBWtcPsx2vw58KfNVN3Cxqn5mOO1m2t8ATMx8dR9wlqpe14z2W0HdopyNIrj1jvxVsepVIBMVPwfYIxLZGdVZJXy7HUz6VKLn0PhxhYdiouV5Suu9ea6ZC1uw9wYCQ2VKk9r5NibM5wCIyLtooheOJgV9ReR/AzeJyB9V9cImNB0BX1PVM0RkG2yy8AKakzq0JVQI4H21MNw2X8Ri5R8YaMNAINBUpojIe7CIu6eAy1S1W0QOBQ5U1bOzG4vIQuA2Vb0/810nFmp9Yfqdqt5Ytt9h2ETbNOBvqnpR8v0XMXPFdZltDwf2Kj920u7NIvJXYFamPzep6p8y+58CxKp6XvJ5XnJ+AL9V1TuqDYSqrhaRR4BtRSSvqkUReRNwUDboRER+Dzyuqh9JPrcDxwJ7AbsCdybtnZOs/yDwWiyA5gpVfbja8Rtlq3aqDQQCW7A35mu8EPgv4H4RmYn5HX8zEZzAZsF4Fha9txlV7cECTL4iIq8rP4CInIqVTTobe139lohcnKyeQWVI9nxgx2qdTTTrvWFzYYV3AKeUbfZFMNujiJyLeV70kIR1i8j7qrWdMBO4V1VT2+VrgePLtnmMLUtA3QccgtmQZwOfB/ZMjr8IuAx7uE2kegHYwTFayWzCEpawNG/Bgix+B3Qln2dhgmtB8vlO4NLM9hdiGnK1tnbHks8rFlb9zsy6jrJtzwN6k38fmOzzluTzNsnntyafv558vhsr86SYDTht65OAz3x+e7JNWgZKgV0z6+8E7sx83tvCmJcAAAPpSURBVAT8Nen7g5igPiyz/lTgobL+/zTtA1Zw9bnMuncmx+zMjPGPmvm7BQ04EBg/3KKqGwFU9VngXvqT4FwGfCiz7XHAL6o1oqoPq+pbsWodk4EbReTYZF0vgIjMTV7HAdqT1/x7gT8BJyffHwE8qaq3lx3iAuAHWD7lY0TkvEwfRUQ+l3w+GrhaVddhWmgROEJEFibmihjToLOsxITq94BfAr8UkQOqDxewpRWgAzNZTE0+rwFKam8FYA+494nIx0Vkcp02GyYI4EBg/FA+g72W/om5ywFE5LMicgSWlfCqeo2p6vWq+jrMhPGpZP89RGQZlpDnUGBO2W6XYYITzHxQcQxV/ZGqXqmqizBXtY+LSKeqrk22PzHZ9LjM/rOSv2/ASjnti5VxKk9k/0dVvUhVf6yqH062OaHOaW6Wgap6E1bxpDupfHwP8P3M+s9g5p3PAP8QkWEnQ2qKF0QgEBiT7ALcAKCqa0TkF9hr+CbgKk3eqxvgPKwQKZgb2UpV3Qs225IPzWx7GXC2iHwKs/3WFfKYuWA+pn32JPtfJSInJZ/T/VfaaejhDfY55UXMlxksd3O5N4fDNGmSPt+OmWd2AJ7RMtc7Vf0h8EMRORvzFhlWhe+gAQcC44czU1OBiHwce22/JLP+MiwQYg41BKOIvEVE/lNEdk0+vwYzXdySbFIEtheRVKgdnd1fVZ/AJsrOxjwk7qlyjDnJchoWsnyXqnYn+/8C09y/gz0k0gm0G5J9T8+0s4uIlFck2TZpe59k24MwoQomxGeJyFEi0iUiZ7Jliswcllz/MCyoY0cRST0uEJF/zWy7C6YtD4/RnjwIS1jCMvwFmyBaDDyMTRxtAk6qst1aYFWddqZj5ops5YcLMusPSARZuu5ryd98ZpsTk+++Wtb2GWXtrsXs0LPKtvtBsv7wsu/fDfwts/8a4O7M+ucz64rAMuDTZW18P7PN5Zh2n07CHZI5p+9ktlucrL87891yMhN8Q10qIuECgcDWjYi8XFX/UWPdSuA6VT11gDZmAi8HHlPViuq3IrKtqlYNJRaRd2JpN/dW1WVl61LNGVWtmg9ZRL6KeW9sV2P9BGCqqj5T9n1Ekne5VtvJdg7zbNhY9v1VwCOq+sXMdzcBO6jq3snnlwEFVV1Tq/3BEGzAgcA4o47wfSuWq/iSauvL2ngOeK7O+np5HI7HgiSWla+oJxgzHINVFql17E1UqSSilq8iHqhxVfWYPbicDcCJSVj3CqzSyZ6Y6Sbd95kq+w2ZIIADgZcOR2L21j+06gAikkuO84kh7n8wJkR/3sx+NcgpmJnkM8ArgUeBb6hqy+o0/n9URxeGI+HoxQAAAABJRU5ErkJggg==`} alt=""/>

                            </Link>
                            <div className="header-search" onClick={toggleClass} >
                                <SearchSvg />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};


export default Header;
