// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DribbbleLineSvg from '@airclass/icons-svg/lib/asn/DribbbleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DribbbleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DribbbleLineSvg}></AntdIcon>;
};

DribbbleLine.displayName = 'DribbbleLine';
DribbbleLine.inheritAttrs = false;
export default DribbbleLine;