import React from 'react';
import { Tabs } from 'antd';
import ContextHeading from '../contextHeading/ContextHeading';

const Announcements: React.FC = () => (
    <>
        {/* heading  */}
        <ContextHeading content='Latest Announcements' classes='mt-5 pt-5 mb-5 pb-3 text-center'/>
        <Tabs
            defaultActiveKey="1"
            centered
            items={new Array(1).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                    label: `Tab ${id}`,
                    key: id,
                    children: `Content of Tab Pane ${id}`,
                };
            })}
        />
        
    </>
);

export default Announcements;