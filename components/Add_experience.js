import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';





import React from 'react';

const Add_experience = () => {
    const { Meta } = Card;
    return (
        <div>
            <Card
                    style={{ width: 250 }}
                    
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                    />
            </Card>
            
        </div>
    );
};

export default Add_experience;