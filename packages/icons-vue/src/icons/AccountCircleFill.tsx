// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AccountCircleFillSvg from '@airclass/icons-svg/lib/asn/AccountCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountCircleFillSvg}></AntdIcon>;
};

AccountCircleFill.displayName = 'AccountCircleFill';
AccountCircleFill.inheritAttrs = false;
export default AccountCircleFill;