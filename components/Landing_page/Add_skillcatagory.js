import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const Add_skillcatagory = () => {
    const { Meta } = Card;
    return (
        <div>
              <Card
                    style={{ width: 250, border: '1px solid grey', backgroundColor:'whitesmoke',borderradius:'15px' }}
                    
                  
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

export default Add_skillcatagory;