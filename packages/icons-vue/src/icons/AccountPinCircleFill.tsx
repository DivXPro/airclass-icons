// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AccountPinCircleFillSvg from '@airclass/icons-svg/lib/asn/AccountPinCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountPinCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountPinCircleFillSvg}></AntdIcon>;
};

AccountPinCircleFill.displayName = 'AccountPinCircleFill';
AccountPinCircleFill.inheritAttrs = false;
export default AccountPinCircleFill;