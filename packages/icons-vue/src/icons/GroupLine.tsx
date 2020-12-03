// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GroupLineSvg from '@airclass/icons-svg/lib/asn/GroupLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GroupLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GroupLineSvg}></AntdIcon>;
};

GroupLine.displayName = 'GroupLine';
GroupLine.inheritAttrs = false;
export default GroupLine;