ÿþe x p o r t   t y p e   J s o n   =  
     |   s t r i n g  
     |   n u m b e r  
     |   b o o l e a n  
     |   n u l l  
     |   {   [ k e y :   s t r i n g ] :   J s o n   |   u n d e f i n e d   }  
     |   J s o n [ ]  
  
 e x p o r t   i n t e r f a c e   D a t a b a s e   {  
     p u b l i c :   {  
         T a b l e s :   {  
             c u s t o m e r s :   {  
                 R o w :   {  
                     i d :   s t r i n g  
                     s t r i p e _ c u s t o m e r _ i d :   s t r i n g   |   n u l l  
                 }  
                 I n s e r t :   {  
                     i d :   s t r i n g  
                     s t r i p e _ c u s t o m e r _ i d ? :   s t r i n g   |   n u l l  
                 }  
                 U p d a t e :   {  
                     i d ? :   s t r i n g  
                     s t r i p e _ c u s t o m e r _ i d ? :   s t r i n g   |   n u l l  
                 }  
                 R e l a t i o n s h i p s :   [  
                     {  
                         f o r e i g n K e y N a m e :   " c u s t o m e r s _ i d _ f k e y "  
                         c o l u m n s :   [ " i d " ]  
                         i s O n e T o O n e :   t r u e  
                         r e f e r e n c e d R e l a t i o n :   " u s e r s "  
                         r e f e r e n c e d C o l u m n s :   [ " i d " ]  
                     }  
                 ]  
             }  
             p r i c e s :   {  
                 R o w :   {  
                     a c t i v e :   b o o l e a n   |   n u l l  
                     c u r r e n c y :   s t r i n g   |   n u l l  
                     i d :   s t r i n g  
                     i n t e r v a l :   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ " p r i c i n g _ p l a n _ i n t e r v a l " ]   |   n u l l  
                     i n t e r v a l _ c o u n t :   n u m b e r   |   n u l l  
                     p r o d u c t _ i d :   s t r i n g   |   n u l l  
                     t r i a l _ p e r i o d _ d a y s :   n u m b e r   |   n u l l  
                     t y p e :   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ " p r i c i n g _ t y p e " ]   |   n u l l  
                     u n i t _ a m o u n t :   n u m b e r   |   n u l l  
                 }  
                 I n s e r t :   {  
                     a c t i v e ? :   b o o l e a n   |   n u l l  
                     c u r r e n c y ? :   s t r i n g   |   n u l l  
                     i d :   s t r i n g  
                     i n t e r v a l ? :   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ " p r i c i n g _ p l a n _ i n t e r v a l " ]   |   n u l l  
                     i n t e r v a l _ c o u n t ? :   n u m b e r   |   n u l l  
                     p r o d u c t _ i d ? :   s t r i n g   |   n u l l  
                     t r i a l _ p e r i o d _ d a y s ? :   n u m b e r   |   n u l l  
                     t y p e ? :   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ " p r i c i n g _ t y p e " ]   |   n u l l  
                     u n i t _ a m o u n t ? :   n u m b e r   |   n u l l  
                 }  
                 U p d a t e :   {  
                     a c t i v e ? :   b o o l e a n   |   n u l l  
                     c u r r e n c y ? :   s t r i n g   |   n u l l  
                     i d ? :   s t r i n g  
                     i n t e r v a l ? :   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ " p r i c i n g _ p l a n _ i n t e r v a l " ]   |   n u l l  
                     i n t e r v a l _ c o u n t ? :   n u m b e r   |   n u l l  
                     p r o d u c t _ i d ? :   s t r i n g   |   n u l l  
                     t r i a l _ p e r i o d _ d a y s ? :   n u m b e r   |   n u l l  
                     t y p e ? :   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ " p r i c i n g _ t y p e " ]   |   n u l l  
                     u n i t _ a m o u n t ? :   n u m b e r   |   n u l l  
                 }  
                 R e l a t i o n s h i p s :   [  
                     {  
                         f o r e i g n K e y N a m e :   " p r i c e s _ p r o d u c t _ i d _ f k e y "  
                         c o l u m n s :   [ " p r o d u c t _ i d " ]  
                         i s O n e T o O n e :   f a l s e  
                         r e f e r e n c e d R e l a t i o n :   " p r o d u c t s "  
                         r e f e r e n c e d C o l u m n s :   [ " i d " ]  
                     }  
                 ]  
             }  
             p r o d u c t s :   {  
                 R o w :   {  
                     a c t i v e :   b o o l e a n   |   n u l l  
                     d e s c r i p t i o n :   s t r i n g   |   n u l l  
                     i d :   s t r i n g  
                     i m a g e :   s t r i n g   |   n u l l  
                     m e t a d a t a :   J s o n   |   n u l l  
                     n a m e :   s t r i n g   |   n u l l  
                 }  
                 I n s e r t :   {  
                     a c t i v e ? :   b o o l e a n   |   n u l l  
                     d e s c r i p t i o n ? :   s t r i n g   |   n u l l  
                     i d :   s t r i n g  
                     i m a g e ? :   s t r i n g   |   n u l l  
                     m e t a d a t a ? :   J s o n   |   n u l l  
                     n a m e ? :   s t r i n g   |   n u l l  
                 }  
                 U p d a t e :   {  
                     a c t i v e ? :   b o o l e a n   |   n u l l  
                     d e s c r i p t i o n ? :   s t r i n g   |   n u l l  
                     i d ? :   s t r i n g  
                     i m a g e ? :   s t r i n g   |   n u l l  
                     m e t a d a t a ? :   J s o n   |   n u l l  
                     n a m e ? :   s t r i n g   |   n u l l  
                 }  
                 R e l a t i o n s h i p s :   [ ]  
             }  
             s u b s c r i p t i o n s :   {  
                 R o w :   {  
                     c a n c e l _ a t :   s t r i n g   |   n u l l  
                     c a n c e l _ a t _ p e r i o d _ e n d :   b o o l e a n   |   n u l l  
                     c a n c e l e d _ a t :   s t r i n g   |   n u l l  
                     c r e a t e d :   s t r i n g  
                     c u r r e n t _ p e r i o d _ e n d :   s t r i n g  
                     c u r r e n t _ p e r i o d _ s t a r t :   s t r i n g  
                     e n d e d _ a t :   s t r i n g   |   n u l l  
                     i d :   s t r i n g  
                     m e t a d a t a :   J s o n   |   n u l l  
                     p r i c e _ i d :   s t r i n g   |   n u l l  
                     q u a n t i t y :   n u m b e r   |   n u l l  
                     s t a t u s :   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ " s u b s c r i p t i o n _ s t a t u s " ]   |   n u l l  
                     t r i a l _ e n d :   s t r i n g   |   n u l l  
                     t r i a l _ s t a r t :   s t r i n g   |   n u l l  
                     u s e r _ i d :   s t r i n g  
                 }  
                 I n s e r t :   {  
                     c a n c e l _ a t ? :   s t r i n g   |   n u l l  
                     c a n c e l _ a t _ p e r i o d _ e n d ? :   b o o l e a n   |   n u l l  
                     c a n c e l e d _ a t ? :   s t r i n g   |   n u l l  
                     c r e a t e d ? :   s t r i n g  
                     c u r r e n t _ p e r i o d _ e n d ? :   s t r i n g  
                     c u r r e n t _ p e r i o d _ s t a r t ? :   s t r i n g  
                     e n d e d _ a t ? :   s t r i n g   |   n u l l  
                     i d :   s t r i n g  
                     m e t a d a t a ? :   J s o n   |   n u l l  
                     p r i c e _ i d ? :   s t r i n g   |   n u l l  
                     q u a n t i t y ? :   n u m b e r   |   n u l l  
                     s t a t u s ? :   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ " s u b s c r i p t i o n _ s t a t u s " ]   |   n u l l  
                     t r i a l _ e n d ? :   s t r i n g   |   n u l l  
                     t r i a l _ s t a r t ? :   s t r i n g   |   n u l l  
                     u s e r _ i d :   s t r i n g  
                 }  
                 U p d a t e :   {  
                     c a n c e l _ a t ? :   s t r i n g   |   n u l l  
                     c a n c e l _ a t _ p e r i o d _ e n d ? :   b o o l e a n   |   n u l l  
                     c a n c e l e d _ a t ? :   s t r i n g   |   n u l l  
                     c r e a t e d ? :   s t r i n g  
                     c u r r e n t _ p e r i o d _ e n d ? :   s t r i n g  
                     c u r r e n t _ p e r i o d _ s t a r t ? :   s t r i n g  
                     e n d e d _ a t ? :   s t r i n g   |   n u l l  
                     i d ? :   s t r i n g  
                     m e t a d a t a ? :   J s o n   |   n u l l  
                     p r i c e _ i d ? :   s t r i n g   |   n u l l  
                     q u a n t i t y ? :   n u m b e r   |   n u l l  
                     s t a t u s ? :   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ " s u b s c r i p t i o n _ s t a t u s " ]   |   n u l l  
                     t r i a l _ e n d ? :   s t r i n g   |   n u l l  
                     t r i a l _ s t a r t ? :   s t r i n g   |   n u l l  
                     u s e r _ i d ? :   s t r i n g  
                 }  
                 R e l a t i o n s h i p s :   [  
                     {  
                         f o r e i g n K e y N a m e :   " s u b s c r i p t i o n s _ p r i c e _ i d _ f k e y "  
                         c o l u m n s :   [ " p r i c e _ i d " ]  
                         i s O n e T o O n e :   f a l s e  
                         r e f e r e n c e d R e l a t i o n :   " p r i c e s "  
                         r e f e r e n c e d C o l u m n s :   [ " i d " ]  
                     } ,  
                     {  
                         f o r e i g n K e y N a m e :   " s u b s c r i p t i o n s _ u s e r _ i d _ f k e y "  
                         c o l u m n s :   [ " u s e r _ i d " ]  
                         i s O n e T o O n e :   f a l s e  
                         r e f e r e n c e d R e l a t i o n :   " u s e r s "  
                         r e f e r e n c e d C o l u m n s :   [ " i d " ]  
                     }  
                 ]  
             }  
             u s e r s :   {  
                 R o w :   {  
                     a v a t a r _ u r l :   s t r i n g   |   n u l l  
                     b i l l i n g _ a d d r e s s :   J s o n   |   n u l l  
                     f u l l _ n a m e :   s t r i n g   |   n u l l  
                     i d :   s t r i n g  
                     p a y m e n t _ m e t h o d :   J s o n   |   n u l l  
                 }  
                 I n s e r t :   {  
                     a v a t a r _ u r l ? :   s t r i n g   |   n u l l  
                     b i l l i n g _ a d d r e s s ? :   J s o n   |   n u l l  
                     f u l l _ n a m e ? :   s t r i n g   |   n u l l  
                     i d :   s t r i n g  
                     p a y m e n t _ m e t h o d ? :   J s o n   |   n u l l  
                 }  
                 U p d a t e :   {  
                     a v a t a r _ u r l ? :   s t r i n g   |   n u l l  
                     b i l l i n g _ a d d r e s s ? :   J s o n   |   n u l l  
                     f u l l _ n a m e ? :   s t r i n g   |   n u l l  
                     i d ? :   s t r i n g  
                     p a y m e n t _ m e t h o d ? :   J s o n   |   n u l l  
                 }  
                 R e l a t i o n s h i p s :   [  
                     {  
                         f o r e i g n K e y N a m e :   " u s e r s _ i d _ f k e y "  
                         c o l u m n s :   [ " i d " ]  
                         i s O n e T o O n e :   t r u e  
                         r e f e r e n c e d R e l a t i o n :   " u s e r s "  
                         r e f e r e n c e d C o l u m n s :   [ " i d " ]  
                     }  
                 ]  
             }  
         }  
         V i e w s :   {  
             [ _   i n   n e v e r ] :   n e v e r  
         }  
         F u n c t i o n s :   {  
             [ _   i n   n e v e r ] :   n e v e r  
         }  
         E n u m s :   {  
             p r i c i n g _ p l a n _ i n t e r v a l :   " d a y "   |   " w e e k "   |   " m o n t h "   |   " y e a r "  
             p r i c i n g _ t y p e :   " o n e _ t i m e "   |   " r e c u r r i n g "  
             s u b s c r i p t i o n _ s t a t u s :  
                 |   " t r i a l i n g "  
                 |   " a c t i v e "  
                 |   " c a n c e l e d "  
                 |   " i n c o m p l e t e "  
                 |   " i n c o m p l e t e _ e x p i r e d "  
                 |   " p a s t _ d u e "  
                 |   " u n p a i d "  
                 |   " p a u s e d "  
         }  
         C o m p o s i t e T y p e s :   {  
             [ _   i n   n e v e r ] :   n e v e r  
         }  
     }  
 }  
  
 e x p o r t   t y p e   T a b l e s <  
     P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s  
         |   k e y o f   ( D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]   &   D a t a b a s e [ " p u b l i c " ] [ " V i e w s " ] )  
         |   {   s c h e m a :   k e y o f   D a t a b a s e   } ,  
     T a b l e N a m e   e x t e n d s   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   {   s c h e m a :   k e y o f   D a t a b a s e   }  
         ?   k e y o f   ( D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]   &  
                 D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " V i e w s " ] )  
         :   n e v e r   =   n e v e r  
 >   =   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   {   s c h e m a :   k e y o f   D a t a b a s e   }  
     ?   ( D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]   &  
             D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " V i e w s " ] ) [ T a b l e N a m e ]   e x t e n d s   {  
             R o w :   i n f e r   R  
         }  
         ?   R  
         :   n e v e r  
     :   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   ( D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]   &  
             D a t a b a s e [ " p u b l i c " ] [ " V i e w s " ] )  
     ?   ( D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]   &  
             D a t a b a s e [ " p u b l i c " ] [ " V i e w s " ] ) [ P u b l i c T a b l e N a m e O r O p t i o n s ]   e x t e n d s   {  
             R o w :   i n f e r   R  
         }  
         ?   R  
         :   n e v e r  
     :   n e v e r  
  
 e x p o r t   t y p e   T a b l e s I n s e r t <  
     P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s  
         |   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]  
         |   {   s c h e m a :   k e y o f   D a t a b a s e   } ,  
     T a b l e N a m e   e x t e n d s   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   {   s c h e m a :   k e y o f   D a t a b a s e   }  
         ?   k e y o f   D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]  
         :   n e v e r   =   n e v e r  
 >   =   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   {   s c h e m a :   k e y o f   D a t a b a s e   }  
     ?   D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ] [ T a b l e N a m e ]   e x t e n d s   {  
             I n s e r t :   i n f e r   I  
         }  
         ?   I  
         :   n e v e r  
     :   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]  
     ?   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ] [ P u b l i c T a b l e N a m e O r O p t i o n s ]   e x t e n d s   {  
             I n s e r t :   i n f e r   I  
         }  
         ?   I  
         :   n e v e r  
     :   n e v e r  
  
 e x p o r t   t y p e   T a b l e s U p d a t e <  
     P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s  
         |   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]  
         |   {   s c h e m a :   k e y o f   D a t a b a s e   } ,  
     T a b l e N a m e   e x t e n d s   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   {   s c h e m a :   k e y o f   D a t a b a s e   }  
         ?   k e y o f   D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]  
         :   n e v e r   =   n e v e r  
 >   =   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   {   s c h e m a :   k e y o f   D a t a b a s e   }  
     ?   D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ] [ T a b l e N a m e ]   e x t e n d s   {  
             U p d a t e :   i n f e r   U  
         }  
         ?   U  
         :   n e v e r  
     :   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]  
     ?   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ] [ P u b l i c T a b l e N a m e O r O p t i o n s ]   e x t e n d s   {  
             U p d a t e :   i n f e r   U  
         }  
         ?   U  
         :   n e v e r  
     :   n e v e r  
  
 e x p o r t   t y p e   E n u m s <  
     P u b l i c E n u m N a m e O r O p t i o n s   e x t e n d s  
         |   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ]  
         |   {   s c h e m a :   k e y o f   D a t a b a s e   } ,  
     E n u m N a m e   e x t e n d s   P u b l i c E n u m N a m e O r O p t i o n s   e x t e n d s   {   s c h e m a :   k e y o f   D a t a b a s e   }  
         ?   k e y o f   D a t a b a s e [ P u b l i c E n u m N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " E n u m s " ]  
         :   n e v e r   =   n e v e r  
 >   =   P u b l i c E n u m N a m e O r O p t i o n s   e x t e n d s   {   s c h e m a :   k e y o f   D a t a b a s e   }  
     ?   D a t a b a s e [ P u b l i c E n u m N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " E n u m s " ] [ E n u m N a m e ]  
     :   P u b l i c E n u m N a m e O r O p t i o n s   e x t e n d s   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ]  
     ?   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ P u b l i c E n u m N a m e O r O p t i o n s ]  
     :   n e v e r  
  
 