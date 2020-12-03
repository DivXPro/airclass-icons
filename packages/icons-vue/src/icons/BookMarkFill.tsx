// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookMarkFillSvg from '@airclass/icons-svg/lib/asn/BookMarkFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookMarkFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookMarkFillSvg}></AntdIcon>;
};

BookMarkFill.displayName = 'BookMarkFill';
BookMarkFill.inheritAttrs = false;
export default BookMarkFill;