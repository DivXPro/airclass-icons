// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AccountPinBoxFillSvg from '@airclass/icons-svg/lib/asn/AccountPinBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountPinBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountPinBoxFillSvg}></AntdIcon>;
};

AccountPinBoxFill.displayName = 'AccountPinBoxFill';
AccountPinBoxFill.inheritAttrs = false;
export default AccountPinBoxFill;