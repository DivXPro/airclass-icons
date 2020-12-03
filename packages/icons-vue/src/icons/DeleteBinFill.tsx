// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeleteBinFillSvg from '@airclass/icons-svg/lib/asn/DeleteBinFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteBinFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteBinFillSvg}></AntdIcon>;
};

DeleteBinFill.displayName = 'DeleteBinFill';
DeleteBinFill.inheritAttrs = false;
export default DeleteBinFill;