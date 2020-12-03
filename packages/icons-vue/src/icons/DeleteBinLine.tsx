// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeleteBinLineSvg from '@airclass/icons-svg/lib/asn/DeleteBinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteBinLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteBinLineSvg}></AntdIcon>;
};

DeleteBinLine.displayName = 'DeleteBinLine';
DeleteBinLine.inheritAttrs = false;
export default DeleteBinLine;