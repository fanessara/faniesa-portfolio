import React from 'react';
import SkillText from './SkillText';
import AllSkill from './AllSkill';
import AllSkillKU from './AllSkillKU';

const SkillMain = () => {
  return (
    <div id="skills">
      <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
        <SkillText/>
      </div>
      <div className='buttom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
        <AllSkill/>
      </div>
      <div className='sm:block lg:hidden'>
        <AllSkillKU/>
      </div>
    </div>
  );
};

export default SkillMain;