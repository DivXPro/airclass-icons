// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GroupFillSvg from '@airclass/icons-svg/lib/asn/GroupFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GroupFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GroupFillSvg}></AntdIcon>;
};

GroupFill.displayName = 'GroupFill';
GroupFill.inheritAttrs = false;
export default GroupFill;