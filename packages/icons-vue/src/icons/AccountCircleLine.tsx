// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AccountCircleLineSvg from '@airclass/icons-svg/lib/asn/AccountCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountCircleLineSvg}></AntdIcon>;
};

AccountCircleLine.displayName = 'AccountCircleLine';
AccountCircleLine.inheritAttrs = false;
export default AccountCircleLine;