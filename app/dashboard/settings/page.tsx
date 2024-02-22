"use client";
import { ConfigProvider, Tabs } from "antd";
import MainLayout from "../components/MainLayout";
import { TabList } from "./constants";

export default function Page(){
        return(
            <MainLayout active="settings">
                <ConfigProvider
                theme={{
                    components:{
                        Tabs:{
                            itemColor:"#747A80",
                            itemHoverColor:"#747A80"
                        }
                    }
                }}
                >
                <div>
                    <Tabs type="card" items={TabList}/>
                </div>
                </ConfigProvider>
            </MainLayout>
        )
}