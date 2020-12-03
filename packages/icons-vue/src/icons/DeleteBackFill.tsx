// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeleteBackFillSvg from '@airclass/icons-svg/lib/asn/DeleteBackFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteBackFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteBackFillSvg}></AntdIcon>;
};

DeleteBackFill.displayName = 'DeleteBackFill';
DeleteBackFill.inheritAttrs = false;
export default DeleteBackFill;