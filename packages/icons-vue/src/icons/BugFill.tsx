// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BugFillSvg from '@airclass/icons-svg/lib/asn/BugFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BugFillSvg}></AntdIcon>;
};

BugFill.displayName = 'BugFill';
BugFill.inheritAttrs = false;
export default BugFill;