def DNA_strand(dna):
   complement = {'A' : 'T', 'C' : 'G', 'G' : 'C', 'T' : 'A'}
   rc = ""
   for base in dna:
       rc += complement[base]
   return "".join(rc)