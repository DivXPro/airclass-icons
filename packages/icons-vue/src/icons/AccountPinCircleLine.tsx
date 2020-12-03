// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AccountPinCircleLineSvg from '@airclass/icons-svg/lib/asn/AccountPinCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountPinCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountPinCircleLineSvg}></AntdIcon>;
};

AccountPinCircleLine.displayName = 'AccountPinCircleLine';
AccountPinCircleLine.inheritAttrs = false;
export default AccountPinCircleLine;